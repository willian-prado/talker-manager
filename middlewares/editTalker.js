const fs = require('fs').promises;
const readFile = require('../service/readFile');

const FILE_NAME = './talker.json';

const editTalker = async (req, res, next) => {
  const { id } = req.params;
  const editedTalker = { 
    id: parseInt(id, 10),
    ...req.body };

  try {
    const talkers = await readFile();
    talkers[parseInt(id, 10) - 1] = editedTalker;
    await fs.writeFile(FILE_NAME, JSON.stringify(talkers));
    return res.status(200).json(editedTalker);
  } catch (e) {
    next(e); 
  }
};

module.exports = editTalker;