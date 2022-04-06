const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.render('admin/tarifAdmin');
  });

module.exports = router;
