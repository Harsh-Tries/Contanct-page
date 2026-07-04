import express from 'express';
import { handleSubmitContact } from '../controllers/contactController.js';

const router = express.Router();

/**
 * POST /api/contact
 * Handles contact page submissions.
 */
router.post('/', handleSubmitContact);

export default router;
