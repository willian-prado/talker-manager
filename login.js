const crypto = require('crypto-js');

const token = crypto.MD5('Test').toString().substr(0, 16);

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePassword = (password) => {
  if (password.length >= 6) return true;
};

const login = async (req, res, _next) => {
  const { email, password } = req.body;

  if (!email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  if (!validateEmail(email)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  if (!password) return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  if (!validatePassword(password)) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }

  res.status(200).json({ token });
};

module.exports = { login };