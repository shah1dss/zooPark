const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Admin } = require('../db/models');

router.post('/', async (req, res) => {
  const { login, password } = req.body;
  console.log('LOGIN SERVER', login);
  console.log('PASS SERVER', password);
  const admin = await Admin.findOne({
    where: { login, password },
  });
  console.log('ADMIN', admin);
  if (admin !== null) {
    req.session.uid = admin.id;
    // res.send('good');
    res.send('good');
  } else {
    res.send('error');
  }
});

module.exports = router;
