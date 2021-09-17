require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mode = process.env.NODE_ENV || "production"

const webpack = require("webpack"); 
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackConfig = require("./webpack.config");
const compiler = webpack(webpackConfig);

let usersRouter = require('./routes/users');
let staysRouter = require('./routes/stays');

let app = express();

if(mode === "development") {
  app.use(webpackDevMiddleware(compiler));
} else {
  app.use(express.static(path.resolve(__dirname, "public")));
}

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api/stays', staysRouter);

module.exports = app;
