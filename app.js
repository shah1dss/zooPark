const express = require('express');
const mainRoutes = require('./routes/main.routes');

const app = express();

const expressConfig = require('./config/express_config');
expressConfig(app);

app.use('/', mainRoutes);

app.listen(3000, () => {
  console.log('Server start ))');
});
