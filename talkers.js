const express = require('express');
const createTalker = require('./middlewares/createTalkers');
const getAllTalkers = require('./middlewares/getAllTalkers');
const getTalkerById = require('./middlewares/getTalkerById');
const editTalker = require('./middlewares/editTalker');
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

talkerRouter.put('/:id',
  tokenValidator,
  nameValidator,
  ageValidator,
  talkValidator,
  dateValidator,
  rateValidator,
  editTalker);

module.exports = talkerRouter;