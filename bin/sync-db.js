/**
 * 使用同步数据库结构
 */

const fs = require('fs');

const SequelizeAuto = require('sequelize-auto');
const config = require('../src/config/config').db;

// 清空
const modelPath = `${__dirname}/../src/schemas`;
if (fs.existsSync(modelPath)) {
  fs.readdirSync(modelPath).forEach((file) => {
    fs.unlinkSync(`${__dirname}/../src/schemas/${file}`);
  });
}

console.log('sync database');

const auto = new SequelizeAuto(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: 'mysql',
  additional: {
    timestamps: false,
  },
  camelCase: true,
  spaces: true,
  indentation: 2,
  directory: modelPath,
  logging: undefined,
});

auto.run((err) => {
  if (err) {
    throw err;
  }
  console.log('sync database DONE!');
});
