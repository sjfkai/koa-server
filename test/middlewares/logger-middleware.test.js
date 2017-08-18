/**
 * 单元测试
 */

const test = require('ava');

const logger = require('../../src/middlewares/logger');

test('logger middleware', async (t) => {
  await logger({}, () => {});
  t.pass();
});

