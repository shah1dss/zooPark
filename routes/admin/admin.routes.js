const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.render('admin/mainAdmin');
  });

module.exports = router;
