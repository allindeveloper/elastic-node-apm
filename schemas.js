const Joi = require('@hapi/joi')
const schemas = {
  userCreate: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  }),

  // define all the other schemas below 
};
module.exports = schemas;