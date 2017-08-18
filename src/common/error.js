
const errors = {
  UNKNOWN: { code: 1, message: '未知错误' },
  INVALID_PARAMS: { code: 1001, message: '参数错误' },
};

class Exception extends Error {
  constructor(error, subMessage) {
    let e = error;
    if (!e) {
      e = errors.UNKNOWN;
    }
    const message = `${e.message}   ${subMessage || ''}`;
    super(`${e.code}: ${message}`);
    this.res = {
      code: e.code,
      message,
    };
    this.name = 'Exception';
    this.message = `${e.code}: ${message}`;
  }
}

exports.Exception = Exception;
exports.errors = errors;
