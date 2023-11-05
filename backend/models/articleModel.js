import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    publication: {
      type: String,
      required: true
    },
    status: {
      type: String
    },
    category: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Article = mongoose.model('Article', articleSchema);

export default Article;
