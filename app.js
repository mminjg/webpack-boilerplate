let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

const webpack = require("webpack"); 
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackConfig = require("./webpack.config");
const compiler = webpack(webpackConfig);

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();

app.use(webpackDevMiddleware(compiler));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
