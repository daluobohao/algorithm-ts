"use strict";
exports.__esModule = true;
exports.SumThreeNumbers = void 0;
/**
 * 给定一个包含n个整数的数组，找出其中和为0的不重复的三元组
 * @param {number[]} arr
 * @return {number[]}
 */
function SumThreeNumbers(arr) {
    // 存储结果
    var result = [];
    // 首先进行排序，便于去重
    arr.sort(function (a, b) { return a - b; });
    for (var i = 0; i < arr.length; i++) {
        // 跳过重复
        if (i && arr[i] === arr[i - 1]) {
            continue;
        }
        // 从此位向后为寻找数组 找到 left 和 right 索引加上 i 位为 所求目标值
        var left = i + 1;
        var right = arr.length - 1;
        while (left < right) {
            var sum = arr[i] + arr[left] + arr[right];
            // 大于0 右变量向左移动
            if (sum > 0) {
                right--;
            }
            // 小于0 左变量向右移动
            else if (sum < 0) {
                left++;
            }
            // 符合条件存储结果
            else {
                result.push([arr[i], arr[left], arr[right]]);
                left++;
                right--;
                // 跳过重复值
                while (arr[left] === arr[left - 1]) {
                    left++;
                }
                while (arr[right] === arr[right + 1]) {
                    right--;
                }
            }
        }
    }
    return result;
}
exports.SumThreeNumbers = SumThreeNumbers;
