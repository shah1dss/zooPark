const router = require('express').Router();
const { Tariff } = require('../db/models');

router
  .get('/weekday', async (req, res) => {
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
  .get('/weekend', async (req, res) => {
    let name = 'weekendAdult';

    const tariffAdult = await Tariff.findOne({
      where: { name },
    });
    name = 'weekendChild';
    const tariffChild = await Tariff.findOne({
      where: { name },
    });

    const head = 'Тариф выходного дня:';
    res.render('tariff', {
      head,
      tariffAdult,
      tariffChild,
      layout: false,
    });
  });

module.exports = router;
