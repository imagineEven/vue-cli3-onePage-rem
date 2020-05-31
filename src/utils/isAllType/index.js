/**
 * @desc 判断数据类型
 * @param {String} type 
 * @param {*} value 
 */
export function isAllType(type, value) {
  if (!isString(type)) {
    throw new Error('isAllType参数type传入应为字符串');
  }
  return eval(`${type}(${value})`);
}

 function isString(value) {
  return Object.prototype.toString.call(value) == "[object String]";
}
function isNumber(value) {
  return Object.prototype.toString.call(value) == "[object Number]";
}
function isBoolean(value) {
  return Object.prototype.toString.call(value) == "[object Boolean]";
}
function isUndefined(value) {
  return Object.prototype.toString.call(value) == "[object Undefined]";
}
function isNull(value) {
  return Object.prototype.toString.call(value) == "[object Null]";
}
function isArray(value) {
  return Object.prototype.toString.call(value) == "[object Array]";
}
function isFunction(value) {
  return Object.prototype.toString.call(value) == "[object Function]";
}
function isObject(value) {
  return Object.prototype.toString.call(value) == "[object Object]";
}
function isRegExp(value) {
  return Object.prototype.toString.call(value) == "[object RegExp]";
}
function isDate(value) {
  return Object.prototype.toString.call(value) == "[object Date]";
}

/**
 * 
 * @desc   判断`obj`是否为空
 * @param  {Object} obj
 * @return {Boolean}
 */
function isEmptyObject(obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj))
      return false
  return !Object.keys(obj).length
}