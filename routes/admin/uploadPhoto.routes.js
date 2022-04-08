const router = require('express').Router();
const path = require('path');
const { LinkImg, Animal } = require('../../db/models');

router.route('/:id')
  .post((req, res, next) => {
    let sampleFile;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
      res.redirect('/admin/animals');
    }

    sampleFile = req.files.sampleFile;
    uploadPath = path.join(process.env.PWD, 'public/img/animals', sampleFile.name);

    sampleFile.mv(uploadPath, (err) => {
      if (err) { return res.status(500).send(err); }
      next();
    });
  })
  .post(async (req, res) => {
    await LinkImg.create({ link: path.join('/img/animals', req.files.sampleFile.name), animal_id: req.params.id });
    const animal = await Animal.findOne({
      where: {
        id: req.params.id,
      },
    });
    animal.photo = path.join('/img/animals', req.files.sampleFile.name);
    animal.save();
    res.redirect('/admin/animals');
  });

module.exports = router;
