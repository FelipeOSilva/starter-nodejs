const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const routes = require('./src/routes');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
mongoose.connect(
  'mongodb+srv://starter:starter@cluster0-zmpmk.mongodb.net/starter?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use('/api', routes);

app.listen(3000);
