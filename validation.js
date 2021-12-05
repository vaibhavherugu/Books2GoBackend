const Joi = require("@hapi/joi");
const registerValidation = (data) => {
  const schema = Joi.object({
    fname: Joi.string().max(50).required(),
    lname: Joi.string().max(50).required(),
    email: Joi.string().max(50).required().email(),
    password: Joi.string().min(6).max(1024).required(),
    address: Joi.string().max(50).required(),
    phone_number: Joi.string().max(50).required(),
  });
  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().max(50).required().email(),
    password: Joi.string().min(6).max(1024).required(),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
