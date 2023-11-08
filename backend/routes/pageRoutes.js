import express from 'express';
import { getPages, getPageById } from '../controllers/pageController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();
router.route('/').get(getPages);
router.route('/:id').get(getPageById);

export default router;
