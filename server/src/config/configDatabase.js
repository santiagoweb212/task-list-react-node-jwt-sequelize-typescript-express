const config = require("./env");
const Sequelize = require("sequelize");
const { db_name, db_user, db_password } = config;

const sequelize = new Sequelize(db_name, db_user, db_password, {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
