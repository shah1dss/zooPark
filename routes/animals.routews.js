const router = require('express').Router();
const { Animal, LinkImg } = require('../db/models');

router.get('/', async (req, res) => {
  let animals;
  try {
    animals = await Animal.findAll({ raw: true });
  } catch (error) {
    return res.json({
      message: 'Не удалось получить записи из базы данных.',
      error: {},
    });
  }
  return res.render('animal', { animals });
});

router.post('/:id', async (req, res) => {
  const { id } = req.params;
  let linksToPhotos;
  // let animal;
  try {
    // animal = await Animal.findOne({
    //   where: {
    //     id,
    //   },
    //   raw: true,
    // });
    linksToPhotos = await LinkImg.findAll({
      where: {
        animal_id: id,
      },
      raw: true,
    });
  } catch (error) {
    return res.json({
      message: 'Не удалось получить записи из базы данных.',
      error: {},
    });
  }
  res.json(linksToPhotos);
});

module.exports = router;
