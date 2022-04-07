const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('main');
});
router.get('/info', (req, res) => {
  res.render('partials/info');
});

module.exports = router;
