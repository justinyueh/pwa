const path = require('path');
const express = require('express');
const ejs = require('ejs');
const favicon = require('serve-favicon');

const app = express();
const port = 3000;

app.set('x-powered-by', false);

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.get('/aaa', (req, res) => {
  console.log(req.url);
  console.log('cloud-ip-header', req.headers['cloud-ip-header']);
  console.log('x-forwarded-for', req.headers['x-forwarded-for']);
  res.send('hello');
});

app.get('/', (req, res) => {
  console.log(req.url);
  console.log('cloud-ip-header', req.headers['cloud-ip-header']);
  console.log('x-forwarded-for', req.headers['x-forwarded-for']);
  res.render('index', { title: 'Hey', message: 'Hello there!' });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
