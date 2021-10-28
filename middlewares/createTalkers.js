const fs = require('fs').promises;
const readFile = require('../service/readFile');

const FILE_NAME = '/home/willian/Trybe/projetos/sd-012-project-talker-manager/talker.json';

const createTalker = async (req, res, next) => {
  const newTalker = req.body;

  try {
    const talkers = await readFile();
    const index = talkers.length + 1;
    newTalker.id = index;
    talkers.push(newTalker);
    
    await fs.writeFile(FILE_NAME, JSON.stringify(talkers));
    return res.status(201).json(newTalker);
  } catch (e) {
    next(e); 
  }
};

module.exports = createTalker;