const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "path/to/database.sqlite"
});
require("./User")(sequelize, Sequelize.DataTypes);
require("./UsersGroup")(sequelize, Sequelize.DataTypes);
sequelize.sync();
module.exports = sequelize;
