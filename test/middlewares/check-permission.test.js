/**
 * 单元测试
 */

const test = require('ava');
const expect = require('chai').expect;

const checkPermission = require('../../src/middlewares/check-permission');

test('logger middleware', async (t) => {
  const checker = checkPermission('lalala');
  expect(checker).to.be.a('function');
  await checker({}, () => {});
  t.pass();
});

