module.exports = (sequelize, DataTypes) => {
  const UsersGroup = sequelize.define(
    "users-group",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      freezeTableName: true
    }
  );
  UsersGroup.associate = models => {
    UsersGroup.hasMany(models.user);
  };
  return UsersGroup;
};
