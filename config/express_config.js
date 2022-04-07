// const cookieParser = require('cookie-parser');
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const { terminalInfo } = require('../middleware/terminalInfo');
// const session = require('express-session');
// const FileStore = require('session-file-store')(session);

// const sessionConfig = {
//   // будем хранить данные сессии в файлах, а не в оперативной памяти
//   // тогда пользователей не будет выкидывать из сессии при перезагрузке сессии
//   store: new FileStore(),
//   name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
//   secret: process.env.SESSION_SECRET ?? 'elbrus_owls', // Секретное слово для шифрования, может быть любым
//   resave: false, // Пересохранять ли куку при каждом запросе
//   saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
//   cookie: {
//     maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
//     httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
//     // path: '/count'
//   },
// };

module.exports = function config(app) {
  app.set('view engine', 'hbs');
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.set('views', path.join(process.env.PWD, 'views'));
  hbs.registerPartials(path.join(process.env.PWD, 'views', 'partials'));
  hbs.registerHelper('currentYear', () => `ZooPark ${new Date().getFullYear()}`);
  app.use(express.static(path.join(process.env.PWD, 'public')));

  app.use(terminalInfo);
  // app.use(session(sessionConfig));
};
