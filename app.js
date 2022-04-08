const express = require('express');
const mainRoutes = require('./routes/main.routes');

const adminTariffRoutes = require('./routes/admin/tariff.routes');
const adminAnimalsRouter = require('./routes/admin/animals.routes');
const animalsRoutes = require('./routes/animals.routews');
const filesRoutes = require('./routes/admin/uploadPhoto.routes');

const tariffRouter = require('./routes/tariff.routes');

const app = express();

const expressConfig = require('./config/express_config');

expressConfig(app);

app.use('/', mainRoutes);
app.use('/admin/tariff', adminTariffRoutes);
app.use('/admin/animals', adminAnimalsRouter);
app.use('/animals', animalsRoutes);

app.use('/tariff', tariffRouter);

app.use('/admin/animals/addphoto', filesRoutes);

app.listen(3000, () => {
  console.log('Server start ))');
});
