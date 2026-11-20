import express from 'express';
import { createContact } from '../controllers/contactController.js';
import {
  contactValidationRules,
  validateContact,
} from '../middleware/validateContact.js';

const router = express.Router();

router.post('/', contactValidationRules, validateContact, createContact);

export default router;
