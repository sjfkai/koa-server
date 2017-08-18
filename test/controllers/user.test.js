/**
 * 单元测试
 */

const test = require('ava');
const expect = require('chai').expect;
const userController = require('../../src/controllers/user');


test('user', async () => {
  const ctx = {};
  await userController.user(ctx);
  expect(ctx.body).have.string('user');
});

