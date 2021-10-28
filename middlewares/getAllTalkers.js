const readFile = require('../service/readFile');

const getAllTalkers = async (_req, res, _next) => {
  const talkers = await readFile();
  
  if (!talkers.length) {
    return res.status(200).send([]);
  }

  return res.status(200).send(talkers);
};

module.exports = getAllTalkers;
