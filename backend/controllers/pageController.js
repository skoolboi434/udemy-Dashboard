import asyncHandler from '../middleware/asyncHandler.js';
import Page from '../models/pageModel.js';

// @DESC Fetch all pagess
// @route GET /api/pages
// @access Public

const getPages = asyncHandler(async (req, res) => {
  const pages = await Page.find({});
  res.json(pages);
});

// @DESC Fetch page by ID
// @route GET /api/pages/:id
// @access Public
const getPageById = asyncHandler(async (req, res) => {
  const page = await Page.findById(req.params.id);

  if (page) {
    return res.json(page);
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

export { getPages, getPageById };
