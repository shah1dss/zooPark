const router = require('express').Router();
const res = require('express/lib/response');
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
  const isAdmin = Boolean(req.session.uid);
  return res.render('animal', { animals, isAdmin });
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

router.get('/getanimal/:id', async (req, res) => {
  // console.log('tyt');
  const { id } = req.params;
  const animal = await Animal.findOne({
    raw: true,
    where: {
      id,
    },
  });
  res.send(animal);
});

module.exports = router;
