import express from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import Article from '../models/articleModel.js';
import { getArticles, getArticleById, createArticle } from '../controllers/articleController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getArticles).post(protect, admin, createArticle);
router.route('/:id').get(getArticleById);

export default router;
