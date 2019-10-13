const express = require('express');
const mongoose = require('mongoose');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect(
  'mongodb+srv://starter:starter@cluster0-zmpmk.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000);
