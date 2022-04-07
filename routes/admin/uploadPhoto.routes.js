const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.render('files');
});

router.post('/1', (req, res) => {
  let sampleFile;
  let uploadPath;
  console.log(req.files);

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  sampleFile = req.files.sampleFile;
  uploadPath = path.join(process.env.PWD, 'public/img/animals', sampleFile.name);

  // Use the mv() method to place the file somewhere on your server
  sampleFile.mv(uploadPath, (err) => {
    if (err) { return res.status(500).send(err); }

    res.send('File uploaded!');
  });
});

module.exports = router;
