/**
 * 单元测试
 */

const test = require('ava');
const expect = require('chai').expect;

const jsonQueryParser = require('../../src/middlewares/json-query-parser')();
const error = require('../../src/common/error');

test('query without jq', async () => {
  const ctx = {
    query: {},
    request: {},
  };
  await jsonQueryParser(ctx, async () => {});

  expect(ctx.jsonQuery).to.be.an('undefined');
  expect(ctx.request.jsonQuery).to.be.an('undefined');
});

test('query with jq', async () => {
  const jq = {
    test: 'test',
  };
  const ctx = {
    query: {
      jq: JSON.stringify(jq),
    },
    request: {},
  };
  await jsonQueryParser(ctx, async () => {});

  expect(ctx.jsonQuery).to.deep.equal(jq);
  expect(ctx.request.jsonQuery).to.deep.equal(jq);
});

test('query with invalid json jq', async () => {
  const ctx = {
    query: {
      jq: '123:oo:[]',
    },
  };

  try {
    await jsonQueryParser(ctx, async () => {});
  } catch (e) {
    expect(e).to.be.instanceof(error.Exception);
    expect(e.res.code).equal(error.errors.INVALID_PARAMS.code);
  }
});
