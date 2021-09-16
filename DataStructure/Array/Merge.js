"use strict";
exports.__esModule = true;
exports.merge = void 0;
/**
 * 给出一个区间的集合，合并所有重叠的区间。
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    var result = [];
    var len = intervals.length;
    if (len === 0) {
        return [];
    }
    // 按照区间开始位置排序
    intervals.sort(function (a, b) { return a[0] - b[0]; });
    var i = 0;
    debugger;
    // 遍历区间
    while (i < len) {
        var currentLeft = intervals[i][0];
        var currentRight = intervals[i][1];
        // 向右遍历 只要有起始位置小于前一个结束位置的，证明有重合
        while (i < len - 1 && intervals[i + 1][0] <= currentRight) {
            i++;
            currentRight = Math.max(currentRight, intervals[i][1]);
        }
        // 向结果中推入一个与后面不会再重合的区间
        result.push([currentLeft, currentRight]);
        i++;
    }
    return result;
}
exports.merge = merge;
