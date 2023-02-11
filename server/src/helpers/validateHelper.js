const { validationResult } = require("express-validator");
const validatenResult = (req, res, next) => {
  try {
    validationResult(req).throw();
    next();
  } catch (error) {
    res.status(403).send({
      errors: error.array(),
    });
  }
};
module.exports = validatenResult;
