const readFile = require('../service/readFile');

const searchTalker = async (req, res, next) => {
  try {
    const { q } = req.query;
    const talkers = await readFile();

    if (!q) {
      return res.status(200).send(talkers);
    } 

    const search = talkers.filter((talker) => talker.name.includes(q));
    res.status(200).send(search);
  } catch (e) {
    next(e);
  }
};

module.exports = searchTalker;
