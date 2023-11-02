import mongoose from 'mongoose';

const pageSchema = new mongoose.Schema(
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
    body: {
      type: String
    },
    category: {
      type: String,
      required: true
    },
    publication: {
      type: String,
      required: true
    },
    articles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article' // Reference to the Article model
      }
    ]
  },
  {
    timestamps: true
  }
);

const Page = mongoose.model('Page', pageSchema);

export default Page;
