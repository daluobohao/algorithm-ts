"use strict";
exports.__esModule = true;
exports.CountBinarySubstrings = void 0;
/**
 * 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
 * 重复出现的子串要计算它们出现的次数。
 * @param {string} str
 * @return {number}
 */
function CountBinarySubstrings(str) {
    // 建立数据结构，堆栈，保存数据  
    var r = [];
    // 给定任意子输入，返回符合条件的字符串
    var match = function (str) {
        var j = str.match(/^(0+|1+)/)[0];
        var o = (parseInt(j[0]) ^ 1).toString().repeat(j.length);
        var reg = new RegExp("^(" + j + o + ")");
        if (reg.test(str)) {
            return RegExp.$1;
        }
        else {
            return '';
        }
    };
    // for 循环控制程序流程
    for (var i = 0, len = str.length - 1; i < len; i++) {
        var sub = match(str.slice(i));
        if (sub) {
            r.push(sub);
        }
    }
    return r.length;
}
exports.CountBinarySubstrings = CountBinarySubstrings;
