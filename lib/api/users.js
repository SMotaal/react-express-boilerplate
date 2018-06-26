const express = require('express');
const Router = express.Router;
const router = Router();
const api = require('../api');
const User = require('../models/User');

router.get('/', api.try(async (req, res) => {
  const docs = await User.find();
  api.send(res, docs);
}));

router.get('/:user_id', api.try(async (req, res) => {
  const doc = await User.findById(req.params.user_id);
  api.send(res, doc);
}));

// router.get('/', async (req, res, next) => {
//   try {
//     const docs = await User.find();
//     res.send(200, docs);
//   } catch (e) {
//     next(e)
//   }
// });

// router.get('/:user_id', async (req, res, next) => {
//   try {
//     const { user_id } = req.params;
//     const doc = await User.findById(user_id);
//     res.send(200, doc);
//   } catch (e) {
//     next(e)
//   }
// })


module.exports = router;
