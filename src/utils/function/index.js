/**
 * @desc   函数节流。
 * 适用于限制`resize`和`scroll`等函数的调用频率
 *
 * @param  {Number}    delay          0 或者更大的毫秒数。 对于事件回调，大约100或250毫秒（或更高）的延迟是最有用的。
 * @param  {Boolean}   noTrailing     可选，默认为false。
 *                                    如果noTrailing为true，当节流函数被调用，每过`delay`毫秒`callback`也将执行一次。
 *                                    如果noTrailing为false或者未传入，`callback`将在最后一次调用节流函数后再执行一次.
 *                                    （延迟`delay`毫秒之后，节流函数没有被调用,内部计数器会复位）
 * @param  {Function}  callback       延迟毫秒后执行的函数。`this`上下文和所有参数都是按原样传递的，
 *                                    执行去节流功能时，调用`callback`。
 * @param  {Boolean}   debounceMode   如果`debounceMode`为true，`clear`在`delay`ms后执行。
 *                                    如果debounceMode是false，`callback`在`delay` ms之后执行。
 *
 * @return {Function}  新的节流函数
 */
export function throttle(delay, noTrailing, callback, debounceMode) {
  // After wrapper has stopped being called, this timeout ensures that
  // `callback` is executed at the proper times in `throttle` and `end`
  // debounce modes.
  var timeoutID;

  // Keep track of the last time `callback` was executed.
  var lastExec = 0;

  // `noTrailing` defaults to falsy.
  if (typeof noTrailing !== 'boolean') {
      debounceMode = callback;
      callback = noTrailing;
      noTrailing = undefined;
  }
  // The `wrapper` function encapsulates all of the throttling / debouncing
  // functionality and when executed will limit the rate at which `callback`
  // is executed.
  function wrapper() {

      var self = this;
      var elapsed = Number(new Date()) - lastExec;
      var args = arguments;
      // Execute `callback` and update the `lastExec` timestamp.
      function exec() {
          lastExec = Number(new Date());
          callback.apply(self, args);
      }
      // If `debounceMode` is true (at begin) this is used to clear the flag
      // to allow future `callback` executions.
      function clear() {
          timeoutID = undefined;
      }
      if (debounceMode && !timeoutID) {
          // Since `wrapper` is being called for the first time and
          // `debounceMode` is true (at begin), execute `callback`.
          exec();
      }
      // Clear any existing timeout.
      if (timeoutID) {
          clearTimeout(timeoutID);
      }
      if (debounceMode === undefined && elapsed > delay) {
          // In throttle mode, if `delay` time has been exceeded, execute
          // `callback`.
          exec();
      } else if (noTrailing !== true) {
          // In trailing throttle mode, since `delay` time has not been
          // exceeded, schedule `callback` to execute `delay` ms after most
          // recent execution.
          //
          // If `debounceMode` is true (at begin), schedule `clear` to execute
          // after `delay` ms.
          //
          // If `debounceMode` is false (at end), schedule `callback` to
          // execute after `delay` ms.
          timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
      }
  }
  // Return the wrapper function.
  return wrapper;
};


/**
 * @desc 函数防抖 
 * 与throttle不同的是，debounce保证一个函数在多少毫秒内不再被触发，只会执行一次，
 * 要么在第一次调用return的防抖函数时执行，要么在延迟指定毫秒后调用。
 * @example 适用场景：如在线编辑的自动存储防抖。
 * @param  {Number}   delay         0或者更大的毫秒数。 对于事件回调，大约100或250毫秒（或更高）的延迟是最有用的。
 * @param  {Boolean}  atBegin       可选，默认为false。
 *                                  如果`atBegin`为false或未传入，回调函数则在第一次调用return的防抖函数后延迟指定毫秒调用。
                                    如果`atBegin`为true，回调函数则在第一次调用return的防抖函数时直接执行
 * @param  {Function} callback      延迟毫秒后执行的函数。`this`上下文和所有参数都是按原样传递的，
 *                                  执行去抖动功能时，，调用`callback`。
 *
 * @return {Function} 新的防抖函数。
 */
export function debounce(delay, atBegin, callback) {
  return callback === undefined ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}


/**
 * @desc 深拷贝，支持常见类型
 * @param {Any} values
 */
export function deepClone(values) {
  var copy;

  // Handle the 3 simple types, and null or undefined
  if (null == values || "object" != typeof values) return values;

  // Handle Date
  if (values instanceof Date) {
      copy = new Date();
      copy.setTime(values.getTime());
      return copy;
  }

  // Handle Array
  if (values instanceof Array) {
      copy = [];
      for (var i = 0, len = values.length; i < len; i++) {
          copy[i] = deepClone(values[i]);
      }
      return copy;
  }

  // Handle Object
  if (values instanceof Object) {
      copy = {};
      for (var attr in values) {
          if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
      }
      return copy;
  }

  throw new Error("Unable to copy values! Its type isn't supported.");
}


export function addParameter(url, name, value) {
  const hasQuery = url.indexOf('?') > -1
  const hash = url.replace(/^[^#]+/, '')
  const cleanUrl = url.replace(/#[^#]+$/, '').replace(new RegExp(`${name}=[^&]+`), '')
  const kv = `${name}=${encodeURIComponent(value)}`
  return hasQuery ? cleanUrl.replace(/\?/, `?${kv}&${hash}`) : `${cleanUrl}?${kv}${hash}`
}


/**
 * Download file from stream
 *
 * @export
 * @param {*} data
 */
export function downloadFile(data, filename) {
  if (!data) {
      return
  }
  let url = window.URL.createObjectURL(new Blob([data]))
  let link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  link.setAttribute('download', filename)

  document.body.appendChild(link)
  link.click()
}

/**
 * 
 * @desc   url参数转对象
 * @param  {String} url  default: window.location.href
 * @return {Object} 
 */
export function parseQueryString(url) {
  url = !url ? window.location.href : url;
  if(url.indexOf('?') === -1) {
      return {};
  }
  var search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);
  if (search === '') {
      return {};
  }
  search = search.split('&');
  var query = {};
  for (var i = 0; i < search.length; i++) {
      var pair = search[i].split('=');
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}


/**
 * 
 * @desc   对象序列化
 * @param  {Object} obj 
 * @return {String}
 */
export function stringfyQueryString(obj) {
  if (!obj) return '';
  var pairs = [];

  for (var key in obj) {
      var value = obj[key];

      if (value instanceof Array) {
          for (var i = 0; i < value.length; ++i) {
              pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
          }
          continue;
      }

      pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
  }

  return pairs.join('&');
}


export function preventURLCache() {
  const query = parseQueryString(document.location.search)
  const prev = query._rnd ? parseInt(query._rnd) : 0
  const dis = (new Date()).getTime() - (isNaN(prev) ? 0 : prev)
  // 新访问或超过1天强制刷新页面
  if (dis > (24 * 60 * 60 * 1000)) {
      const location = document.location
      const rnd = new Date().getTime()
      const search = location.search === '' ? `?_rnd=${rnd}` : `${location.search}&_rnd=${rnd}`
      const redirect = `${location.protocol}//${location.host}${location.pathname}${search}${location.hash}`
      document.location = redirect;
  }
}

//xss攻击特殊字符过滤  "&", "<", ">", """，"'", "/", "?"，";", ":", "%", "<SPACE>", "=", "+"
export function checkXss(text){
  let newText = text;
  var arr=new Array();
  arr=["alert","eval","<script>","</script>","onblur","onload","onfocus","onerror","onclick","onMouseOver",
       "onMouseOut","onSelect","onChange","onSubmit","console","href","<>","<", ">","<SPACE>",
       "<iframe>","</iframe>","<img>","</img>","<iframe>","</iframe>","<video>","</video>",
       "<canvas>","</canvas>","<label>","</label>","<span>","</span>","document","location","javascript"];
  var rs = "";
  arr.forEach((item,i) => {
      if (newText.indexOf(item) !=-1) {
          var rep = new RegExp(item,"g")
          newText = newText.replace(rep, '');
      }
  })
  return newText;
}
