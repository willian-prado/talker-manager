const talkValidator = (req, res, next) => {
  const { talk } = req.body;

  if (!talk) {
    return res.status(400)
    .json({ message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }

  next();
};

const dateValidator = (req, res, next) => {
  const { watchedAt } = req.body.talk;
  const regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

  if (!watchedAt) {
    return res.status(400)
    .json({ message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' }); 
  }
  if (!(regex.test(watchedAt))) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

const rateValidator = (req, res, next) => {
  const { rate } = req.body.talk;
  
  if (!rate) { 
    return res.status(400)
    .json({ message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' }); 
  }

  const checkNumber = rate >= 1 && rate <= 5;
  if (!(Number.isInteger(rate) && checkNumber)) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }
  next();
};

module.exports = { talkValidator, dateValidator, rateValidator };
