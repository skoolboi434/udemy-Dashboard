import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connetDB from './config/db.js';
import colors from 'colors';
import users from './data/users.js';
import articles from './data/articles.js';
import pages from './data/pages.js';
import User from './models/userModel.js';
import Article from './models/articleModel.js';
import Page from './models/pageModel.js';

dotenv.config();

connetDB();

const importData = async () => {
  try {
    await Article.deleteMany();
    await Page.deleteMany();
    await User.deleteMany();

    const createUsers = await User.insertMany(users);

    const adminUser = createUsers[0]._id;

    const sampleArticles = articles.map(article => {
      return { ...article, user: adminUser };
    });

    const samplePages = pages.map(page => {
      return { ...page, user: adminUser };
    });

    await Article.insertMany(sampleArticles);
    await Page.insertMany(samplePages);

    console.log('Data Imported'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Article.deleteMany();
    await Page.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed'.red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
