const express = require('express');
const req = require('express/lib/request');
const mainRoutes = require('./routes/main.routes');

const animalsRoutes = require('./routes/animals.routews');

const adminRoutes = require('./routes/admin/admin.routes');
const animalsRouter = require('./routes/admin/animals.routes');
const tariffRouter = require('./routes/tariff.routes');


const app = express();

const expressConfig = require('./config/express_config');

expressConfig(app);

app.use('/', mainRoutes);

app.use('/animals', animalsRoutes);

app.use('/admin', adminRoutes);
app.use('/admin/animals', animalsRouter);
app.use('/tariff', tariffRouter);

app.listen(3000, () => {
  console.log('Server start ))');
});
