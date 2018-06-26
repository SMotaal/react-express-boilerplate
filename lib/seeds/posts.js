const { Post, Comment } = require('../models/Post');
const users = require('./users');

const posts = [];

const comment = new Comment({
    body: 'Wow, this article was tres dopenessness. Would read again',
    user: users[1]
});

const post = new Post({
    title: 'Which Backstreet Boy is the most fly?',
    description: 'Philosophers have argued for centuries that AJ was',
    user: users[0],
    comments: []
});

post.comments.push(comment);
posts.push(post);

module.exports = posts;