import asyncHandler from '../middleware/asyncHandler.js';
import Article from '../models/articleModel.js';

// @DESC Fetch all articles
// @route GET /api/products
// @access Public

const getArticles = asyncHandler(async (req, res) => {
  const articles = await Article.find({});
  res.json(articles);
});

// @DESC Fetch article by ID
// @route GET /api/articles/:id
// @access Public
const getArticleById = asyncHandler(async (req, res) => {
  const article = await Article.findById(req.params.id);

  if (article) {
    return res.json(article);
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

export { getArticles, getArticleById };
