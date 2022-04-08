const router = require('express').Router();
const { Animal } = require('../../db/models');
const sessionCheck = require('../../middleware/sessionCheck');

router.route('/')
  .get(sessionCheck, async (req, res) => {
    const allAnimals = await Animal.findAll({ order: [['createdAt', 'DESC']] });
    const isAdmin = Boolean(req.session.uid);
    res.render('admin/animalsAdmin', { allAnimals, isAdmin });
  })
  .post(async (req, res) => {
    try {
      const { name, description, photo } = req.body;
      try {
        await Animal.create({ name, description, photo });
        const allAnimals = await Animal.findAll({ order: [['createdAt', 'DESC']] });
        res.render('admin/listAnimalsAdmin', { allAnimals, layout: false });
      } catch (error) {
        console.log(error);
        res.send('ошибка при добавлении в БД');
      }
    } catch (error) {
      console.log(error);
      res.send('сервер Ошибка при добавлении');
    }
  });

router.route('/:id')
  .delete(async (req, res) => {
    try {
      const { del } = req.body;
      await Animal.destroy({ where: { id: del } });
      const allAnimals = await Animal.findAll({ order: [['createdAt', 'DESC']] });
      res.render('admin/listAnimalsAdmin', { allAnimals, layout: false });
    } catch (error) {
      console.log(error);
      res.send('ошибка при удаление');
    }
  })
  .put(async (req, res) => {
    try {
      const {
        countEdit, name, photo, description,
      } = req.body;
      const editAnimals = await Animal.update(
        { name, photo, description },
        { where: { id: countEdit }, raw: true },
      );
      const allAnimals = await Animal.findAll({ order: [['createdAt', 'DESC']] });
      res.render('admin/listAnimalsAdmin', { allAnimals, layout: false });
    } catch (error) {
      console.log(error);
      res.send('ошибка при изменении');
    }
  });

module.exports = router;
