/**
 * 事件绑定
 *
 * @method bind
 * @param  {dom||window}   elem        需要绑定的dom节点或window对象
 * @param  {String}        event       绑定的事件名称
 * @param  {Function}      handler     事件处理方法
 */
export function bind(elem, event, handler) {
  if (elem && elem !== 'undefined' && event && handler) {
    event = event === 'mousewheel' ? (document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll") : event;
    if (document.attachEvent) { //if IE (and Opera depending on user setting)
      elem.attachEvent("on" + event, handler);
    } else { //WC3 browsers
      elem.addEventListener(event, handler, false);
    }
  }
}

/** 
 * 移除事件绑定
 *
 * @method unbind
 * @param  {dom||window}   elem         需要移除绑定的dom节点或window对象
 * @param  {String}        event        绑定的事件名称
 * @param  {Function||Array<Function>}  handler    事件处理方法，可以为数组
 */
export function unbind(elem, event, handler) {
  if (elem && elem !== 'undefined' && event && handler) {
    event = event === 'mousewheel' ? (document.onmousewheel !== undefined ? "mousewheel" : "DOMMouseScroll") : event;
    var handlers = [];
    if (Array.isArray(handler)) {
      handlers = handler.length > 0 ? handler : [];
    } else {
      handlers.push(handler);
    }
    if (document.detachEvent) {
      handlers.forEach(e => {
          elem.detachEvent('on' + event, e);
      })
    } else {
      handlers.forEach(e => {
        elem.removeEventListener(event, e, false);
      })
    }
  }
}

/**
 * 
 * @desc 获取滚动条距顶部的距离
 */
export function getScrollTop() {
  return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}

/**
 * 
 * @desc  获取一个元素的距离文档(document)的位置，类似jQ中的offset()
 * @param {HTMLElement} ele 
 * @returns { {left: number, top: number} }
 */
export function offset(ele) {
  var pos = {
      left: 0,
      top: 0
  };
  while (ele) {
      pos.left += ele.offsetLeft;
      pos.top += ele.offsetTop;
      ele = ele.offsetParent;
  }
  return pos;
}

/**
 * 
 * @desc  在${duration}时间内，滚动条平滑滚动到${to}指定位置
 * @param {Number} to 
 * @param {Number} duration 
 */
export function scrollTo(to, duration) {
  if (duration < 0) {
      setScrollTop(to);
      return
  }
  var diff = to - getScrollTop();
  if (diff === 0) return
  var step = diff / duration * 10;
  requestAnimationFrame(
    function () {
        if (Math.abs(step) > Math.abs(diff)) {
            setScrollTop(getScrollTop() + diff);
            return;
        }
        setScrollTop(getScrollTop() + step);
        if (diff > 0 && getScrollTop() >= to || diff < 0 && getScrollTop() <= to) {
            return;
        }
        scrollTo(to, duration - 16);
    });
}

/**
 * @desc 设置滚动条距顶部的距离
 */
export function setScrollTop(value) {
  window.scrollTo(0, value);
  return value;
}

export function vh() {
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

export function vw() {
  return  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}

/**
 * 
 * @desc H5软键盘缩回、弹起回调
 * 当软件键盘弹起会改变当前 window.innerHeight，监听这个值变化
 * @param {Function} downCb 当软键盘弹起后，缩回的回调
 * @param {Function} upCb 当软键盘弹起的回调
 */

export function windowResize(downCb, upCb) {
	var clientHeight = window.innerHeight;
	downCb = typeof downCb === 'function' ? downCb : function () {}
	upCb = typeof upCb === 'function' ? upCb : function () {}
	window.addEventListener('resize', () => {
		var height = window.innerHeight;
		if (height === clientHeight) {
			downCb();
		}
		if (height < clientHeight) {
			upCb();
		}
	});
}