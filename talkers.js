const fs = require('fs').promises;
const express = require('express');

const FILE_NAME = './talker.json';

const readFile = async () => {
  try {
    const file = await fs.readFile(FILE_NAME, 'utf-8');
    const talkers = JSON.parse(file);
    return talkers;
  } catch (err) {
    console.log('Erro ao ler o arqivo ');
  }
};

const getAllTalkers = async (_req, res, _next) => {
  const talkers = await readFile();
  
  if (!talkers.length) {
    return res.status(200).send([]);
  }

  return res.status(200).send(talkers);
};

const getTalkerById = async (req, res, _next) => {
  const talkers = await readFile();
  const { id } = req.params;

  const findTalker = talkers.find((talker) => talker.id === parseInt(id, 10));
  if (!findTalker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  return res.status(200).send(findTalker);
};

const talkerRouter = express.Router();

talkerRouter.get('/', getAllTalkers);
talkerRouter.get('/:id', getTalkerById);

module.exports = talkerRouter;