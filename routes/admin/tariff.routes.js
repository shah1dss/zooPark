const router = require('express').Router();
const { Tariff } = require('../../db/models');

router.route('/')
  .get(async (req, res) => {
    const allTariff = await Tariff.findAll({ order: [['createdAt', 'DESC']] });
    res.render('admin/tariffAdmin', { allTariff });
  })
  .post(async (req, res) => {
    try {
      const { name, description, price } = req.body;
      await Tariff.create({ name, description, price });
      const allTariff = await Tariff.findAll({ order: [['createdAt', 'DESC']] });
      res.render('admin/listTariffAdmin', { allTariff, layout: false });
    } catch (error) {
      console.log(error);
      res.send('сервер Ошибка при добавлении');
    }
  });

router.route('/:id')
  .delete(async (req, res) => {
    try {
      const { del } = req.body;
      await Tariff.destroy({ where: { id: del } });
      const allTariff = await Tariff.findAll({ order: [['createdAt', 'DESC']] });
      res.render('admin/listTariffAdmin', { allTariff, layout: false });
    } catch (error) {
      console.log(error);
      res.send('ошибка при удаление');
    }
  })
  .put(async (req, res) => {
    try {
      const {
        countEdit, name, description, price,
      } = req.body;
      const editAnimals = await Tariff.update(
        { name, description, price },
        { where: { id: countEdit }, raw: true },
      );
      const allTariff = await Tariff.findAll({ order: [['createdAt', 'DESC']] });
      res.render('admin/listTariffAdmin', { allTariff, layout: false });
    } catch (error) {
      console.log(error);
      res.send('ошибка при изменении');
    }
  });

module.exports = router;
