const { Router } = require('express');
const Lorem = require('../models/Lorem');

module.exports = Router()
  .get('/', (req, res, next) => {
    Lorem
      .find()
      .lean()
      .then(lorem => res.send(lorem))
      .catch(next);
  });
