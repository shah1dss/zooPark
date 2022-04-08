module.exports = (req, res, next) => {
  if (!req.session.uid) {
    res.redirect('/');
  } else {
    return next();
  }
};
