const fs = require('fs').promises;

const FILE_NAME = '/home/willian/Trybe/projetos/sd-012-project-talker-manager/talker.json';

const readFile = async () => {
  try {
    const file = await fs.readFile(FILE_NAME, 'utf-8');
    const talkers = JSON.parse(file);
    return talkers;
  } catch (err) {
    console.log('Erro ao ler o arqivo ');
  }
};

module.exports = readFile;
