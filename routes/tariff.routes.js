const router = require('express').Router();
const { Tariff } = require('../db/models');

router
  .get('/getTariffs', async (req, res) => {
    const tariff = await Tariff.findAll();
    let html = '';
    for (let i = 0; i < tariff.length; i += 1) {
      html += `<li><a class="dropdown-item" href="/tariff/${tariff[i].id}">${tariff[i].name}</a></li>`;
    }
    res.send(html);
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
