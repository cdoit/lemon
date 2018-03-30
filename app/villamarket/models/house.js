module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "House",
    {
      id: { type: DataTypes.STRING(100), primaryKey: true, unique: true },
      name: { type: DataTypes.STRING(50), allowNull: false, comment: "名称" },
      style: { type: DataTypes.STRING(50), allowNull: false, comment: "风格" },
      region: { type: DataTypes.STRING(50), allowNull: false, comment: "区域" },
      area: { type: DataTypes.STRING(50), allowNull: false, comment: "面积" },
      layout: { type: DataTypes.STRING(50), allowNull: false, comment: "户型" },
      introduce: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "简介"
      },
      price: { type: DataTypes.STRING, allowNull: false, comment: "推荐价格" },
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
