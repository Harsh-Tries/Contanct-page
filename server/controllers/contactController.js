import { sendContactEmail } from '../utils/mailer.js';

/**
 * Controller to handle POST /api/contact submissions.
 * Validates the request body inputs and dispatches email notifications.
 */
export const handleSubmitContact = async (req, res) => {
  const { name, email, message } = req.body;

  // 1. Validation Logic
  const errors = {};

  // Name validation
  if (!name || name.trim() === '') {
    errors.name = 'Full name is required.';
  } else if (name.trim().length < 3) {
    errors.name = 'Full name must be at least 3 characters.';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || email.trim() === '') {
    errors.email = 'Email address is required.';
  } else if (!emailRegex.test(email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  // Message validation
  if (!message || message.trim() === '') {
    errors.message = 'Message is required.';
  } else if (message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters long.';
  }

  // If there are validation failures, return 400 Bad Request with descriptions
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed.',
      errors,
    });
  }

  // 2. Process Submission & Send Email
  try {
    const formattedData = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    await sendContactEmail(formattedData);

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully. Thank you!',
    });
  } catch (error) {
    console.error('Nodemailer mailing failed:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to dispatch email. Please check server logs.',
      error: error.message,
    });
  }
};
