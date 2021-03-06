"use strict";
exports.__esModule = true;
exports.FindContinousSequence = void 0;
/**
 * 输入一个正数sum，打印出所有和为sum的连续正数序列。
 * @param {number} sum
 * @return {number[]}
 */
function FindContinousSequence(sum) {
    if (sum < 1) {
        return [];
    }
    // 存储结果的数组
    var result = [];
    // 表示当前的子序列
    var child = [1, 2];
    // 子序列的头元素
    var left = 1;
    // 子序列的尾元素
    var right = 2;
    // 子序列当前总和
    var currentSum = 3;
    while (right < sum) {
        while (currentSum < sum && right < sum) {
            child.push(++right);
            currentSum += right;
        }
        while (currentSum > sum && left < sum) {
            child.shift();
            currentSum -= left++;
        }
        // 当前已经存在和为sum的连续正数序列
        if (currentSum === sum && child.length > 1) {
            result.push(child.slice());
            // 继续向后寻找
            child.push(++right);
            currentSum += right;
        }
    }
    return result;
}
exports.FindContinousSequence = FindContinousSequence;
