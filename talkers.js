const express = require('express');
const createTalker = require('./middlewares/createTalkers');
const getAllTalkers = require('./middlewares/getAllTalkers');
const getTalkerById = require('./middlewares/getTalkerById');
const { 
  tokenValidator,
  nameValidator,
  ageValidator,
  talkValidator,
  dateValidator,
  rateValidator,
} = require('./errorHandlers/errorHandlers');

const talkerRouter = express.Router();

talkerRouter.get('/', getAllTalkers);
talkerRouter.get('/:id', getTalkerById);
talkerRouter.post('/',
  tokenValidator,
  nameValidator,
  ageValidator,
  talkValidator,
  dateValidator,
  rateValidator,
  createTalker);

module.exports = talkerRouter;