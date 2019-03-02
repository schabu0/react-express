const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => res.send({
  username: os.userInfo().username
}));

app.get('/api', (req, res) => res.send({
  username: "dupa"
}));

app.listen(1338, () => console.log('Listening on port 1337, API on port 1338!'));
