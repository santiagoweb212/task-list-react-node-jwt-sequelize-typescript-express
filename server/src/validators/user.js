const { check } = require("express-validator");
const validatenResult = require("../helpers/validateHelper");
const validateCreate = [
  check("name").exists().not().isEmpty(),
  check("lastName").exists().not().isEmpty(),
  check("email")
    .exists()
    .isEmail()
    .not()
    .isEmpty()
    .withMessage("Invalid email"),
  check("password")
    .exists()
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres.")
    .matches(/\d/)
    .withMessage("La contraseña debe tener al menos un número.")
    .matches(/[a-z]/)
    .withMessage("La contraseña debe tener al menos una letra minúscula.")
    .matches(/[A-Z]/)
    .withMessage("La contraseña debe tener al menos una letra mayúscula.")
    .not()
    .isEmpty()
    .withMessage("El campo de contraseña es requerido."),
  check("confirmPassword")
    .exists()
    .withMessage("El campo de Confirm Password es requerido.")
    .not()
    .isEmpty()
    .withMessage("El campo de confirmación de contraseña es requerido.")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Las contraseñas no coinciden.");
      }
      return true;
    }),
  (req, res, next) => {
    validatenResult(req, res, next);
  },
];

const validateLogin = [
  check("email").exists().not().isEmpty().isEmail(),
  check("password")
    .exists()
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres.")
    .matches(/\d/)
    .withMessage("La contraseña debe tener al menos un número.")
    .matches(/[a-z]/)
    .withMessage("La contraseña debe tener al menos una letra minúscula.")
    .matches(/[A-Z]/)
    .withMessage("La contraseña debe tener al menos una letra mayúscula.")
    .not()
    .isEmpty()
    .withMessage("El campo de contraseña es requerido."),
    (req, res, next) => {
      validatenResult(req, res, next);
    },
];
module.exports = { validateCreate,validateLogin };
