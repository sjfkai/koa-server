const router = require('koa-router')();

const controller = require('../controllers/user');
const checkPermission = require('../middlewares/check-permission');

router.get('/', checkPermission('12111'), controller.user);

module.exports = router;
