const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express();

const getConfigParam = (param) => config.get(param);

const PORT = process.env.PORT || getConfigParam('localServerPort');

const start = async () => {
  try {
    await mongoose.connect(getConfigParam('dbURL'));

    app.listen(PORT, () => {
      console.warn('Server listen port:', PORT);
    });
  } catch (e) {
    console.error(e);
  }
}

start();
