module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "House",
    {
      id: { type: DataTypes.STRING(100), primaryKey: true, unique: true },
      name: { type: DataTypes.STRING, allowNull: false, comment: "户型名称" },
      created_at: { type: DataTypes.DATE, allowNull: true },
      updated_at: { type: DataTypes.DATE, allowNull: true }
    },
    {
      timestamps: true,
      underscored: true,
      paranoid: true,
      freezeTableName: true,
      tableName: "house",
      charset: "utf8",
      collate: "utf8_general_ci"
    }
  );
};
