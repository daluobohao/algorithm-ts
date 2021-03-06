"use strict";
exports.__esModule = true;
exports.FindPeakElement = void 0;
/**
 * 寻找数组中的峰值，峰值即是其值大于左右相邻值的元素
 * 数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可
 * @param {number[]} nums
 * @return {number}
 */
function FindPeakElement(nums) {
    var left = 0;
    var right = nums.length - 1;
    while (left < right) {
        var mid = Math.floor(left + (right - left) / 2);
        // 证明峰值在左边
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        }
        // 反之则认为峰值在右边
        else {
            left = mid + 1;
        }
    }
    return left;
}
exports.FindPeakElement = FindPeakElement;
