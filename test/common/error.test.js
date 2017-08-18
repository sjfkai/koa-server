/**
 * 单元测试
 */

const Exception = require('../../src/common/error').Exception;
const errors = require('../../src/common/error').errors;

const test = require('ava');
const expect = require('chai').expect;

test('new Exception', async () => {
  const exception = new Exception(errors.INVALID_PARAMS, 'subMessage');
  expect(exception).to.be.an.instanceof(Exception);
  expect(exception).to.be.an.instanceof(Error);
  expect(exception.stack).to.have.string(errors.INVALID_PARAMS.code);
  expect(exception.res).to.be.a('object');
  expect(exception.res.code).equal(errors.INVALID_PARAMS.code);
  expect(exception.res.message).to.have.string('subMessage');
});

test('new Exception()', async () => {
  const exception = new Exception();
  expect(exception).to.be.an.instanceof(Exception);
  expect(exception).to.be.an.instanceof(Error);
  expect(exception.stack).to.have.string(errors.UNKNOWN.message);
  expect(exception.res).to.be.a('object');
  expect(exception.res.code).equal(errors.UNKNOWN.code);
  expect(exception.res.message).to.have.string(errors.UNKNOWN.message);
});

