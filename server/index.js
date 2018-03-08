const express = require('express');
const path = require('path');
const gamesMiddleware = require('./games');

const app = express();

app.use(express.static('dist', {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  },
}));

app.get('/api/games', gamesMiddleware.all);

app.get('/*', function(request, response) {
  response.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(3000);
