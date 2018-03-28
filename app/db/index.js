"use strict";

exports.initvillamarket = function() {
  var sequelize = new Sequelize("cdovillamarket", "test", "test", {
    host: "127.0.0.1",
    port: 3306,
    dialect: "mysql",
    logging: console.log,
    //东八时区
    timezone: "+08:00"
  });

  sequelize.sync();

  exports.villamarketstorage = Object.create({});
  exports.villamarketstorage.Sequelize = sequelize;
};
