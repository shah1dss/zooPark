const express = require('express');
const req = require('express/lib/request');
const mainRoutes = require('./routes/main.routes');

const adminTarifRoutes = require('./routes/admin/tarif.routes');
const adminAnimalsRouter = require('./routes/admin/animals.routes');
const animalsRoutes = require('./routes/animals.routews');

const tariffRouter = require('./routes/tariff.routes');

const app = express();

const expressConfig = require('./config/express_config');

expressConfig(app);

app.use('/', mainRoutes);
app.use('/admin/tarif', adminTarifRoutes);
app.use('/admin/animals', adminAnimalsRouter);
app.use('/animals', animalsRoutes);

app.use('/tariff', tariffRouter);

app.listen(3000, () => {
  console.log('Server start ))');
});
