const tokenValidator = require('./tokenValidator');
const ageValidator = require('./ageValidator');
const nameValidator = require('./nameValidator');
const { talkValidator, dateValidator, rateValidator } = require('./talkValidator');

module.exports = {
  tokenValidator,
  ageValidator,
  nameValidator,
  talkValidator,
  dateValidator,
  rateValidator,
};