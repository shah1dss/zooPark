const router = require('express').Router();
const path = require('path');
const { LinkImg } = require('../../db/models');

router.route('/:id')
  .post((req, res, next) => {
    let sampleFile;
    let uploadPath;
    // console.log('req.files =============>', req.files);
    // console.log('req.query =============>', req.params);

    if (!req.files || Object.keys(req.files).length === 0) {
      // return res.status(400).send('No files were uploaded.');
      res.redirect('/admin/animals');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    sampleFile = req.files.sampleFile;
    uploadPath = path.join(process.env.PWD, 'public/img/animals', sampleFile.name);

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(uploadPath, (err) => {
      if (err) { return res.status(500).send(err); }

      // res.send('File uploaded!');
      // res.redirect('/admin/animals');
      next();
    });
  })
  .post(async (req, res) => {
    console.log('req.query =============>', req.files);
    console.log('req.query =============>', req.params);
    await LinkImg.create({ link: path.join('/img/animals', req.files.sampleFile.name), animal_id: req.params.id });
    res.redirect('/admin/animals');
  });

module.exports = router;
