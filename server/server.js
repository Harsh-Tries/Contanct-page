import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import contactRouter from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// 1. Security Headers
app.use(helmet());

// 2. CORS configuration (Allow request origin from Vite client)
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl) or matching origins
      if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV !== 'production') {
        callback(null, true);
      } else {
        callback(new Error('Request blocked by CORS security policy.'));
      }
    },
    credentials: true,
  })
);

// 3. Logger Middleware
app.use(morgan('dev'));

// 4. Request Parsers
app.use(express.json());

// 5. Rate Limiter (Prevent spamming the mailer endpoint)
const contactFormLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 contact submissions per 15-minute window
  message: {
    success: false,
    error: 'Too many contact form submissions from this network. Please try again after 15 minutes.'
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// 6. Routes
app.use('/api/contact', contactFormLimiter, contactRouter);

// 7. Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'An internal server error occurred.',
    message: process.env.NODE_ENV === 'production' ? undefined : err.message,
  });
});

// 8. Start server
app.listen(PORT, () => {
  console.log(`[Server] Company Contact page backend listening on port ${PORT}`);
});
