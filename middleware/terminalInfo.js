const terminalInfo = (req, res, next) => {
  next();
  console.log(req.method, req.path, res.statusCode);
};

module.exports = { terminalInfo };
