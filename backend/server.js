import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import articles from './data/articles.js';
const port = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
  res.send('Api running....');
});

app.get('/api/articles', (req, res) => {
  res.json(articles);
});

app.get('/api/articles/:id', (req, res) => {
  const article = articles.find(a => a._id === req.params.id);
  res.json(article);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
