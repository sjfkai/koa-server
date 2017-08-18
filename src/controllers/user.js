/**
 * controller
 * 处理请求
 */

const userService = require('../services/user');

module.exports = {
  async user(ctx) {
    ctx.body = `${await userService.user()} /api/user`;
  },
};
