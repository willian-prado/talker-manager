const ageValidator = async (req, res, next) => {
  const { age } = req.body;
  
  if (!age) return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  if (parseInt(age, 10) < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};

module.exports = ageValidator;
