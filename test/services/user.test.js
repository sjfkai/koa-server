/**
 * 单元测试
 */

const test = require('ava');

const userService = require('../../src/services/user');

test('user', async (t) => {
  const user = await userService.user();
  t.is(user, 'Hello sls admin backend');
});

