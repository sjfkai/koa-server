const router = require('koa-router')();


router.get('/', async (ctx) => {
  ctx.body = 'Hello sls admin backend /api';
});

module.exports = router;
