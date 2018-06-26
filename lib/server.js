const cors = require('./cors.js');
const express = require("express");
const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/blog";
const app = express();
const PORT = 8080;
const connected = mongoose.connect(uri);

const routes = ['users', 'posts'];

connected.then(() => {
  app.use(cors);

  for (const route of routes) {
    try {
      app.use(`/${route}`, require(`./api/${route}`));
      console.log(`Using api/${route}`);
    } catch (exception) {
      console.warn(`Failed to use route api/${route}`);
    }
  };

  app.use((err, req, res, next) => {
    res.status(500).json({ err: err.toString() })
  })

  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
});

