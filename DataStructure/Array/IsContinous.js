"use strict";
exports.__esModule = true;
exports.IsContinuous = void 0;
/**
 * 判断传入的一组扑克牌是否为一个顺子,2-10为数字本身，A为1，J为11，Q为12，K为13，大小王可为任意数字。
 * @param {number[]} numbers
 * @return {boolean}
 */
function IsContinuous(numbers) {
    // 判断边界条件
    if (numbers === null || numbers.length < 1) {
        return false;
    }
    // 首先对numbers进行排序
    numbers = numbers.sort(function (a, b) { return (a - b); });
    var len = numbers.length;
    // 内部含有大小王的个数 大小王用0表示
    var numberOfZero = 0;
    // 内部间隔大小 2,4 表示1个间隔 2,5表示两个间隔
    var numberOfGap = 0;
    // 统计这组牌中大小王的个数
    for (var i = 0; i < len && numbers[i] === 0; i++) {
        numberOfZero++;
    }
    // 统计间隔大小
    var small = numberOfZero;
    var big = small + 1;
    while (big < len) {
        // 如果有对子 那么就不会为顺子
        if (numbers[small] === numbers[big]) {
            return false;
        }
        numberOfGap += numbers[big] - numbers[small] - 1;
        small = big;
        big++;
    }
    // 如果间隔数大于大小王的个数 那么就不为顺子
    return numberOfGap > numberOfZero ? false : true;
}
exports.IsContinuous = IsContinuous;
