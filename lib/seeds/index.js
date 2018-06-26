const mongoose = require('mongoose');

const User = require('../models/User');
const { Post } = require('../models/Post');

const users = require('./users');
const posts = require('./posts');
const mongoURI = 'mongodb://localhost:27017/blog';

const truncateDatabase = async () => {
    return Promise.all([User.deleteMany(), Post.deleteMany()]);
};

const makeSeeds = async () => {
    // Await for mongoose to connect to database
    await mongoose.connect(mongoURI);
    // Delete all current content on database
    await truncateDatabase();
    // Save users seeds into database
    await Promise.all(users.map(user => user.save()));
    // Save post seeds into database
    await Promise.all(posts.map(post => post.save()));
    // Close database connection
    mongoose.connection.close();
};

makeSeeds();