/**
 * 单元测试
 */

const test = require('ava');
const expect = require('chai').expect;

const adjustResponse = require('../../src/middlewares/adjust-response');
const Exception = require('../../src/common/error').Exception;
const errors = require('../../src/common/error').errors;

test('adjust response when success respond', async () => {
  const ctx = {};
  await adjustResponse(ctx, async () => {
    ctx.body = {
      a: 'a',
    };
  });

  expect(ctx.body.code).equal(0);
  expect(ctx.body.data).deep.equal({
    a: 'a',
  });
});

test('adjust response when Exception', async () => {
  const ctx = {};
  await adjustResponse(ctx, async () => {
    throw new Exception(errors.INVALID_PARAMS);
  });

  expect(ctx.body.code).equal(errors.INVALID_PARAMS.code);
  expect(ctx.body.message).to.have.string(errors.INVALID_PARAMS.message);
});

test('adjust response when Error', async () => {
  const ctx = {};
  await adjustResponse(ctx, async () => {
    throw new Error('error');
  });

  expect(ctx.body.code).equal(errors.UNKNOWN.code);
  expect(ctx.body.message).to.have.string(errors.UNKNOWN.message);
});

test('adjust response when 404', async () => {
  const ctx = {};
  await adjustResponse(ctx, async () => {
    const error = new Error('Not Found');
    error.name = 'NotFoundError';
    error.code = 404;
    throw error;
  });
  // do nothing
  expect(ctx).deep.equal(ctx);
});
