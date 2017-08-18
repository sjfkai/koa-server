/**
 * log 中间件
 */

module.exports = async (ctx, next) => {
  // TODO  暂时使用koa-logger
  console.log('logger middleware');
  await next();
};
