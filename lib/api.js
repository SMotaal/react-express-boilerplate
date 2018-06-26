module.exports = {
  try: (ƒ) => async (req, res, next) => {
    try {
      return await ƒ(req, res, next);
    } catch (exception) {
      next(exception)
    }
  },
  send: (res, data, code = 200) => {
    res.status(code).send(data);
  }
}
