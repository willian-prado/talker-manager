const fs = require('fs').promises;

const FILE_NAME = './talker.json';

const readFile = async () => {
  try {
    const talkers = await fs.readFile(FILE_NAME, 'utf-8');
    return talkers;
  } catch (err) {
    console.log('Erro ao ler o arqivo ');
  }
};

const getTalkers = async (_req, res, _next) => {
  const talkers = await readFile();
  
  if (!talkers.length) {
    return res.status(200).send([]);
  }

  return res.status(200).send(talkers);
};

module.exports = { getTalkers };