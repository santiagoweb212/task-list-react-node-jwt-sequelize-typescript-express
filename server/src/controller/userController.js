const User = require("../models/usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const generateAuthToken = async (user) => {
  const payload = {
    user: {
      id: user.id,
    },
  };
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: 3600,
  });
};
const sendConfirmationEmail = async (user, token) => {
  /* generamos token de autenticaacin */
  try {
    const confirmLink = `http://localhost:3500/api/users/confirm-user/${token}`;

    console.log("-->", token);
    /* generar mensaje */
    const message = {
      to: user.email,
      from: "juanusca45@gmail.com",
      subject: "Confirmación de cuenta",
      text: `hola ${user.name}, tu cuenta ha sido creada con éxito ${confirmLink}`,
    };
    // Enviar el mensaje de correo electrónico usando SendGrid
    await sgMail.send(message);
    user.auth_token = token;
    await user.save();
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

const createUser = async (req, res) => {
  try {
    const { name, lastName, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      last_name: lastName,
      email,
      password: hashPassword,
    });
    //generar token de autenticidad
    const token = await generateAuthToken(user);
    await sendConfirmationEmail(user, token);

    res.status(201).json({ succes: true, data: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ succes: false, error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ succes: false, error: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({ succes: false, error: "Wrong password" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ succes: false, error: error.message });
  }
};
//check if user exists
const checkUser = async (req, res) => {
  try {
    const { userid } = req.params;
    const user = await User.findByPk(userid);
    if (user) {
      return res.status(200).json({ succes: true });
    } else {
      throw Error("User not found");
    }
  } catch (error) {
    return res.status(500).json({ succes: false, error: error.message });
  }
};
const confirmUser = async (req, res) => {
  try {
    const token = req.params.userid;
    ;
    console.log(req.params);

    console.log("--->token-->", token);

    const user = await User.findOne({ auth_token: token });

    if (!user) {
      return res.status(400).json({ message: "Token inválido." });
    }

    user.is_active = true;

    await user.save();

    res.status(200).json({ message: "Cuenta confirmada exitosamente." });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al confirmar la cuenta." });
  }
};
module.exports = { createUser, loginUser, checkUser, confirmUser };
