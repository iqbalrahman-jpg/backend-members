var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var index = require('./routes/index');
var users = require('./routes/users');
var akun = require('./routes/akun');
var admin = require('./routes/admin');
var paket = require('./routes/pesanan_paket');
var rental = require('./routes/pesanan_rental');
var bayar = require('./routes/bayar');
var bayar_rental = require('./routes/rentals');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/beranda', index);
app.use('/users', users);
app.use('/akun', akun);
app.use('/akun/{id}', akun);
app.use('/admin', admin);
app.use('/admin/{id}', admin);
app.use('/paket', paket);
app.use('/paket/{id}', paket);
app.use('/rental', rental);
app.use('/rental/{id}', rental);
app.use('/bayar', bayar);
app.use('/bayar/{id}', bayar);
app.use('/rentalbayar/', bayar_rental);
app.use('/rentalbayar/{id}', bayar_rental);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
