import express from 'express';
import asyncHandler from '../middleware/asyncHandler.js';
import Article from '../models/articleModel.js';
import { getArticles, getArticleById } from '../controllers/articleController.js';

const router = express.Router();

router.route('/').get(getArticles);

router.route('/:id').get(getArticleById);

export default router;
