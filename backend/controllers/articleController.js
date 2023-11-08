import asyncHandler from '../middleware/asyncHandler.js';
import Article from '../models/articleModel.js';

// @DESC Fetch all articles
// @route GET /api/articles
// @access Public

const getArticles = asyncHandler(async (req, res) => {
  const pageSize = PAGINATION_LIMIT;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword ? { title: { $regex: req.query.keyword, $options: 'i' } } : {};

  const count = await Article.countDocuments({ ...keyword });

  const articles = await Article.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ articles, page, pages: Math.ceil(count / pageSize) });
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

// @DESC Create article
// @route POST /api/articles
// @access Private / Admin

const createArticle = asyncHandler(async (req, res) => {
  try {
    const article = new Article({
      title: 'Sample Title',
      user: req.user._id,
      image: 'https://placehold.co/200',
      category: 'Sports',
      publication: 'Sample Publication',
      body: 'Sample Body',
      draft: 'Draft'
    });

    const createdArticle = await article.save();
    res.status(201).json(createdArticle);
  } catch (error) {
    console.error('Error creating article:', error);
    res.status(500).json({ message: 'Failed to create the article' });
  }
});

// @DESC Update article
// @route PUT /api/articles/:id/edit
// @access Private

const updateArticle = asyncHandler(async (req, res) => {
  const { title, body, image, category, publication, draft } = req.body;

  const article = await Article.findById(req.params.id);

  if (article) {
    article.title = title;
    article.body = body;
    article.image = image;
    article.category = category;
    article.publication = publication;
    article.draft = draft;

    const updateArticle = await article.save();
    res.json(updateArticle);
  } else {
    throw new Error('Resource not found');
  }
});

// @DESC Delete article
// @route Delete /api/articles/:id
// @access Private

const deleteArticle = asyncHandler(async (req, res) => {
  const article = await Article.findById(req.params.id);

  if (article) {
    await Article.deleteOne({ _id: article._id });
    res.status(200).json({ message: 'Article deleted' });
  } else {
    throw new Error('Resource not found');
  }
});

export { getArticles, getArticleById, createArticle, updateArticle, deleteArticle };
