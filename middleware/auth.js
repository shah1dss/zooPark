// промежуточная функция для очистки куки при истёкшей сессии на сервере
const cookiesCleaner = (req, res, next) => {
  if (req.cookies.user_uid && !req.session.user) {
    res.clearCookie('user_uid');
    res.redirect('/');
  } else {
    next();
  }
};

// промежуточная функция проверки авторизированного пользователя
const sessionChecker = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/authorization');
  }
};

// промежуточная функция наполнения локальных переменных
const resLocals = (req, res, next) => {
  if (req.session.user) {
    res.locals.user = req.session.user;
  }
  next();
};

module.exports = { cookiesCleaner, sessionChecker, resLocals };
