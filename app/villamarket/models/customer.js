module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "Customer",
    {
      id: { type: DataTypes.STRING(100), primaryKey: true, unique: true },
      adminname: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "用户名"
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "用户密码"
      },
      gender: {
        field: "gender",
        type: DataTypes.ENUM("MALE", "FEMALE"),
        allowNull: true,
        comment: "性别"
      },
      birth: {
        field: "birth",
        type: DataTypes.DATE,
        allowNull: true,
        comment: "生日"
      },
      registertime: {
        field: "registertime",
        type: DataTypes.DATE,
        allowNull: true,
        comment: "注册时间"
      },
      fhcesscounts: {
        type: DataTypes.BIGINT(11),
        allowNull: true,
        defaultValue: 0,
        comment: "成功登陆次数"
      },
      lastfhcesstime: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "最后成功登陆时间"
      },
      lastfhcessip: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
        validate: { isIP: true },
        comment: "最后成功登录IP"
      },
      failcounts: {
        type: DataTypes.BIGINT(11),
        allowNull: true,
        defaultValue: 0,
        comment: "失败登陆次数"
      },
      lastfailtime: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "最后成功登陆时间"
      },
      lastfailip: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
        validate: { isIP: true },
        comment: "最后成功登录IP"
      },
      roleId: {
        field: "role_id",
        type: DataTypes.BIGINT(11),
        allowNull: false,
        comment: "当前用户的角色"
      },
      companyId: {
        field: "company_id",
        type: DataTypes.BIGINT(11),
        allowNull: true,
        comment: "当前用户所属公司"
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        comment: "是否正常状态"
      },
      created_at: { type: DataTypes.DATE, allowNull: true },
      updated_at: { type: DataTypes.DATE, allowNull: true }
    },
    {
      timestamps: true,
      underscored: true,
      paranoid: true,
      freezeTableName: true,
      tableName: "customer",
      charset: "utf8",
      collate: "utf8_general_ci"
    }
  ); // id: { type: DataTypes.STRING(100), primaryKey: true, unique: true },
  // indexes: [{
  //   name: 'user_roleId',
  //   method: 'BTREE',
  //   fields: ['role_id']
  // }]
};
