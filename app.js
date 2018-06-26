require('dotenv')
	.config();

const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(favicon(path.join(__dirname, 'client', 'build', 'favicon.ico')));
app.use(logger('dev'));

app.use('/api', require('./routes/api'));
app.use('/flickr-test', require('./routes/flickr-test'));

app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});


module.exports = app;