/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
      decodeURIComponent(search)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\+/g, ' ') +
      '"}'
  )
}

// 类型判断封装
export function isAllType(type, value) {
  return eval(`${type}(${value})`);
}

 // 是否是字符串
 function isString(value) {
  return Object.prototype.toString.call(value) == "[object String]";
}
// 是否是数字
function isNumber(value) {
  return Object.prototype.toString.call(value) == "[object Number]";
}
// 是否是布尔值
function isBoolean(value) {
  return Object.prototype.toString.call(value) == "[object Boolean]";
}
// 是否undefined
function isUndefined(value) {
  return Object.prototype.toString.call(value) == "[object Undefined]";
}
// 是否是null
function isNull(value) {
  return Object.prototype.toString.call(value) == "[object Null]";
}
// 是否数组
function isArray(value) {
  return Object.prototype.toString.call(value) == "[object Array]";
}
// 是否是函数
function isFunction(value) {
  return Object.prototype.toString.call(value) == "[object Function]";
}
// 是否是对象
function isObject(value) {
  return Object.prototype.toString.call(value) == "[object Object]";
}
// 是否是正则表达式
function isRegExp(value) {
  return Object.prototype.toString.call(value) == "[object RegExp]";
}
// 是否是日期对象
function isDate(value) {
  return Object.prototype.toString.call(value) == "[object Date]";
}