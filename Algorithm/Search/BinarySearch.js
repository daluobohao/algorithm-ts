"use strict";
exports.__esModule = true;
exports.BinarySearch = void 0;
/**
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target
 * 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 * @param {number[]} nums 要查询的数组
 * @param {number} target 查找的目标值
 */
function BinarySearch(nums, target) {
    // 定义左索引和右索引和中间指示符
    var low = 0;
    var high = nums.length - 1;
    var mid = 0;
    // 循环查找
    while (low <= high) {
        // 防止 low + high 过大
        mid = low + Math.floor((high - low) / 2);
        if (target === nums[mid]) {
            return mid;
        }
        else if (target > nums[mid]) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    // 若找不到 则返回-1
    return -1;
}
exports.BinarySearch = BinarySearch;
