module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "Customerorder",
    {
      id: { type: DataTypes.STRING(100), primaryKey: true, unique: true },
      customerid: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "客户id"
      },
      houseid: { type: DataTypes.STRING, allowNull: false, comment: "户型id" },
      created_at: { type: DataTypes.DATE, allowNull: true },
      updated_at: { type: DataTypes.DATE, allowNull: true }
    },
    {
      timestamps: true,
      underscored: true,
      paranoid: true,
      freezeTableName: true,
      tableName: "customerorder",
      charset: "utf8",
      collate: "utf8_general_ci"
    }
  );
};
