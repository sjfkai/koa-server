/**
 * 解析 query string 中的 jq 参数
 * 并将其保存到 ctx.jsonQuery 和 ctx.request.jsonQuery 中
 */
const error = require('../common/error');

function gen() {
  return async function parser(ctx, next) {
    const query = ctx.query;
    if (query.jq) {
      try {
        const jsonQuery = JSON.parse(query.jq);
        ctx.jsonQuery = jsonQuery;
        ctx.request.jsonQuery = jsonQuery;
      } catch (e) {
        // json有问题时，返回参数错误
        throw new error.Exception(error.errors.INVALID_PARAMS);
      }
    }
    await next();
  };
}

module.exports = gen;
