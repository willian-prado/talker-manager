const fs = require('fs').promises;
const readFile = require('../service/readFile');

const FILE_NAME = './talker.json';

const deleteTalker = async (req, res, next) => { 
  const { id } = req.params;

  try {
    const talkers = await readFile();
    const talkerIndex = parseInt(id, 10) - 1;
    talkers.splice(talkerIndex, 1);

    await fs.writeFile(FILE_NAME, JSON.stringify(talkers));
    return res.status(200).json({ message: 'Pessoa palestrante deletada com sucesso' });
  } catch (e) {
    next(e);
  }
};

module.exports = deleteTalker;
