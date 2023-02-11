const User = require("../models/usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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
    //generar token de autenticidad
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) {
          return res.status(500).json({ msg: "Error al firmar el token." });
        }
        return res.status(200).json({ suces: true, auth: token });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ succes: false, error: error.message });
  }
};
module.exports = { createUser, loginUser };
