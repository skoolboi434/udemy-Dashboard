import express from 'express';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

import connetDB from './config/db.js';
import articleRoutes from './routes/articleRoutes.js';

const port = process.env.PORT || 5000;

connetDB(); // Connect to MongoDB

const app = express();

app.get('/', (req, res) => {
  res.send('Api running....');
});

app.use('/api/articles', articleRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
