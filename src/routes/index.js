const router = require('koa-router')();

const api = require('./api');
const user = require('./user');

router.get('/', async (ctx) => {
  ctx.body = 'Hello sls admin backend';
});

router.use('/api', api.routes(), api.allowedMethods());
router.use('/api/user', user.routes(), user.allowedMethods());

router.all('*', async (ctx) => {
  ctx.throw(404, 'Not Found!!!');
});

module.exports = router;
