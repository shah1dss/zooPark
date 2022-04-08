const router = require('express').Router();

router.get('/', (req, res) => {
  const isAdmin = Boolean(req.session.uid);
  console.log(isAdmin);

  res.render('main', { isAdmin });
});
router.get('/info', (req, res) => {
  const isAdmin = Boolean(req.session.uid);
  res.render('partials/info', { isAdmin });
});

module.exports = router;
