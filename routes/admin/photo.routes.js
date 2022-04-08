const router = require('express').Router();
const path = require('path');

// router
//   .post('/', async (req, res) => {
//     let sampleFile;
//     let uploadPath;
//     if (!req.files || Object.keys(req.files).length === 0) {
//       return res.status(400).send('No files were uploaded.');
//     }

//     sampleFile = req.files.sampleFile;
//     uploadPath = path.join(process.env.PWD, sampleFile.name);

//     sampleFile.mv(uploadPath, (err) => {
//       if (err) { return res.status(500).send(err); }
//       res.send('File uploaded!');
//     });
//   });

module.exports = router;
