"use strict";
exports.__esModule = true;
exports.LongestCommonPerfix = void 0;
/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串。
 * @param {string[]} strs
 * @return {string}
 */
function LongestCommonPerfix(strs) {
    if (strs.length <= 0) {
        return strs[0] || '';
    }
    // 排序
    strs.sort();
    if (strs[0] === '') {
        return '';
    }
    // 排序后只需比较第一位与最后一位即可
    var first = strs[0];
    var last = strs[strs.length - 1];
    if (first === last || last.match(eval("/^" + first + "/"))) {
        return first;
    }
    else {
        for (var i = 0; i < first.length; i++) {
            if (first[i] !== last[i]) {
                return first.substring(0, i);
            }
        }
    }
}
exports.LongestCommonPerfix = LongestCommonPerfix;
