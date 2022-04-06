const router = require('express').Router();
// const async = require('hbs/lib/async');
const { Animal } = require('../../db/models');

router.route('/')
  .get(async (req, res) => {
    const allAnimals = await Animal.findAll({ order: [['createdAt', 'DESC']] });
    res.render('admin/animalsAdmin', { allAnimals });
  });

module.exports = router;
