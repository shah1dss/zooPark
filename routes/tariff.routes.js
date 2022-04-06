const router = require('express').Router();
const { Tariff } = require('../db/models');

router
  .get('/weekday', (req, res) => {
    const name = 'weekday';
    const tariff = Tariff.findOne({
      where: name,
    });
    const head = 'Тариф буднего дня:';
    res.render('main', { head, tariff, layout: false });
  })
  .get('/weekend', (req, res) => {
    const name = 'weekend';
    const tariff = Tariff.findOne({
      where: name,
    });
    const head = 'Тариф выходного дня:';
    res.render('main', { head, tariff, layout: false });
  });
