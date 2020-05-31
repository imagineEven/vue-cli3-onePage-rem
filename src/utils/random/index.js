/**
 * @desc 随机生成颜色
 * @params 
 * @return {String}
*/

export function randomColor() {
  return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}


/**
 * @desc 随机生成[min-max]的随机数
 * @param {Number} max 最大值
 * @param {Number} min 最小值
 */

export function randomNum(min, max) {
  return Math.floor(Math.random() * (max-min+1) )+ min;
}