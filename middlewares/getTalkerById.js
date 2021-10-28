const readFile = require('../service/readFile');

const getTalkerById = async (req, res, _next) => {
  const talkers = await readFile();
  const { id } = req.params;

  const findTalker = talkers.find((talker) => talker.id === parseInt(id, 10));
  if (!findTalker) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  return res.status(200).send(findTalker);
};

module.exports = getTalkerById;
