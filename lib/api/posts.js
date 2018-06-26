const express = require('express');
const Router = express.Router;
const router = Router();
const api = require('../api');
const Posts = require('../models/Post');

router.get('/', api.try(async (req, res) => {
  const docs = await Posts.find();
  api.send(res, docs);
}));

router.get('/:post_id', api.try(async (req, res) => {
  const doc = await Posts.findById(req.params.post_id)
    .populate('user').populate('comments.user');
  api.send(res, doc);
}));

module.exports = router;
