const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = require('./Post/Comment').schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comments: [commentSchema]
});

module.exports = mongoose.model('Post', postSchema);
