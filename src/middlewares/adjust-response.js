/**
 * 调整返回的数据格式
 * 
 * 正确的请求返回
 * {
 *   code: 0,
 *   data: { // 之前的 ctx.body
 *   }
 * }
 * 
 * 如果抛出了Exception 则返回
 * 
 * {
 *   code: xxx,
 *   message: 'xxxx'
 * }
 */

const Exception = require('../common/error').Exception;
const errors = require('../common/error').errors;

module.exports = async (ctx, next) => {
  try {
    await next();
    ctx.body = {
      code: 0,
      data: ctx.body,
    };
  } catch (error) {
    if (error instanceof Exception) {
      ctx.body = {
        code: error.res.code,
        message: error.res.message,
      };
    } else if (error.name !== 'NotFoundError') { // 忽略404
      ctx.body = errors.UNKNOWN;
    }
  }
};

