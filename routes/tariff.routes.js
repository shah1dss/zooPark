const router = require('express').Router();
// const async = require('hbs/lib/async');
const { Tariff } = require('../db/models');

router
  .get('/:name', async (req, res) => {
    let name = 'weekdayAdult';

    const tariffAdult = await Tariff.findOne({
      where: { name },
    });
    name = 'weekdayChild';
    const tariffChild = await Tariff.findOne({
      where: { name },
    });
    // console.log('DESC ADULT ', await tariffAdult.description);
    // console.log('DESC CHILD ', await tariffChild.description);
    const head = 'Тариф буднего дня:';
    res.render('tariff', {
      head,
      tariffAdult,
      tariffChild,
      layout: false,
    });
  })
  .get('/:id', async (req, res) => {
    const { id } = req.params;
    const tariff = await Tariff.findOne({
      where: { id },
    });
    console.log('YA TUT!!!!');
    const head = tariff.name;
    // const tariffBody = tariff.description;
    // const price = tariff.price;
    res.render('tariff', {
      head,
      tariff,
      // layout: false,
    });
  });

module.exports = router;
