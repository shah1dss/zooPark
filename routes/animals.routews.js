const router = require('express').Router();
const { Animal, LinkImg } = require('../db/models')

router.get('/', async (req, res) => {
  let animals;
  let links;
  try {
    animals = await Animal.findAll({ order: [['id', 'DESC']], raw: true });
    console.log(animals);
    links = await LinkImg.findAll({ raw: true });
    // console.log(links);
  } catch (error) {
    return res.json({
      message: 'Не удалось получить записи из базы данных.',
      error: {},
    });
  }
  // console.log(links);
  // let linkToRender;
  // if (Lin)
  return res.render('animal', { animals, links });
});

module.exports = router;
