const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().min(2).trim().required(),
  email: Joi.string().email().trim().required(),
  phone: Joi.string().min(3).max(15).required(),
});

module.exports = {
  addSchema,
};
