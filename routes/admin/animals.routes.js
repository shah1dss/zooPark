const router = require('express').Router();
const async = require('hbs/lib/async');
// const async = require('hbs/lib/async');
// const async = require('hbs/lib/async');
const { Animal } = require('../../db/models');

router.route('/')
  .get(async (req, res) => {
    const allAnimals = await Animal.findAll({ order: [['createdAt', 'DESC']] });
    res.render('admin/animalsAdmin', { allAnimals });
  })
  .post(async (req, res) => {
    try {
      const { name, photo, description } = req.body;
      try {
        await Animal.create({ name, photo, description });
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
    const {
      edit, name, photo, description,
    } = req.body;
    const editAnimals = await Animal.update(
      { name, photo, description },
      { where: { id: edit }, raw: true },
    );
    res.send('ошибка при изменении');
  });

// router.route('/:id')
//   .delete(async (req, res) => {
//     try {
//       const { id } = req.params;
//       await Animal.destroy({ where: { id } });
//       const allAnimals = await Animal.findAll({ order: [['createdAt', 'DESC']] });
//       res.render('admin/listAnimalsAdmin', { allAnimals, layout: false });
//     } catch (error) {
//       console.log(error);
//       res.send('ошибка при удаление');
//     }
//   });

// router.route('/:id/edit')
//   .delete(async (req, res) => {
//     res.render('admin/editAnimalsAdmin', { layout: false });
//   });
// .put(async (req, res) => {
//   try {

//   } catch (error) {
//     console.log(error);
//     res.send('ошибка при изменении');
//   }
// });

module.exports = router;
