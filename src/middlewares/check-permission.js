/**
 * 权限检查中间件
 */

function checkerGenerator(permission) {
  return async (ctx, next) => {
    console.log(`permissionChecker ${permission}`);
    await next();
  };
}

module.exports = checkerGenerator;
