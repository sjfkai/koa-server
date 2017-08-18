/**
 * db连接
 * 引入schema
 * 建立表间关系
 */

const Sequelize = require('sequelize');
const fs = require('fs');
const config = require('../config/config').db;
// 数据库
const sequelize = new Sequelize(config.database, config.username, config.password, {
  dialect: 'mysql',
  host: config.host,
  port: config.port,
  timezone: '+08:00',
  logging: undefined,
  pool: {
    maxConnections: config.pool,
  },
});

// import all models
fs.readdirSync(`${__dirname}/../schemas`).forEach((file) => {
  sequelize.import(`${__dirname}/../schemas/${file}`);
});

// 关系

module.exports = sequelize;
