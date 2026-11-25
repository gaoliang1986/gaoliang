/**
 * 字符串分割：按指定分隔符把字符串拆分成数组。
 * @param {string|RegExp} separator 分隔符
 * @param {string} str 待分割的字符串
 * @returns {string[]} 分割后的数组
 */
function splitString(separator, str) {
  return str.split(separator);
}

module.exports = splitString;

if (require.main === module) {
  console.log(splitString(',', 'a,b,c'));
}
