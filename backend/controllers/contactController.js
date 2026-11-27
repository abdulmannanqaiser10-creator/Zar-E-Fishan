import { saveContact } from '../utils/contactStore.js';

export const createContact = async (req, res, next) => {
  try {
    const { name, email, phone, subject, budget, message } = req.body;

    const saved = await saveContact({
      name,
      email,
      phone: phone || '',
      subject,
      budget: budget || '',
      message,
    });

    res.status(201).json({
      success: true,
      message: 'Thank you for contacting Zar-E-Fishan. We will respond shortly.',
      data: {
        id: saved.id,
        name: saved.name,
        email: saved.email,
        subject: saved.subject,
        createdAt: saved.createdAt,
      },
    });
  } catch (error) {
    next(error);
  }
};
