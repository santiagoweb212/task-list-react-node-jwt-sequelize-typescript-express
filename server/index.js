const sequelize = require("./src/config/configDatabase");
const app = require("./src/app");

const main = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({ force: true });
    app.listen(3500, () => {
      console.log("Server is running on port 3500");
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
main();
