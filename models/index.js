const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite"
});
require("./User")(sequelize, Sequelize.DataTypes);
require("./UsersGroup")(sequelize, Sequelize.DataTypes);
module.exports = {
  sequelize
};
