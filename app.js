const express = require('express');
const mainRoutes = require('./routes/main.routes');
const tarifRoutes = require('./routes/admin/tarif.routes');
const animalsRouter = require('./routes/admin/animals.routes');

const app = express();

const expressConfig = require('./config/express_config');

expressConfig(app);

app.use('/', mainRoutes);
app.use('/admin/tarif', tarifRoutes);
app.use('/admin/animals', animalsRouter);

app.listen(3000, () => {
  console.log('Server start ))');
});
