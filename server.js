const express = require('express');
const mongoose = require('mongoose');

// Iniciando o App
const app = express();

// Iniciando o DB
mongoose.connect(
  'mongodb+srv://starter:starter@cluster0-zmpmk.mongodb.net/starter?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

require('./src/models/Product');

const Product = mongoose.model('Product');

app.get('/', (req, res) => {
  Product.create({
    title: 'React Native',
    description: 'Build native apps with React',
    url: 'http://github.com/facebook/react-native'
  });
  res.send('Hello World');
});

app.listen(3000);
