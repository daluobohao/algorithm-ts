"use strict";
exports.__esModule = true;
exports.PrintDiagonal = void 0;
/**
 * 给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素
 * @param {number[][]} matrix
 * @return {number[]}
 */
function PrintDiagonal(matrix) {
    var result = [];
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return result;
    }
    // 获取行数
    var rows = matrix.length;
    // 获取列数
    var columns = matrix[0].length;
    for (var i = 0; i < rows + columns - 1; i++) {
        // i 为 0或者偶数时，从下向上遍历
        if (i === 0 || i % 2 === 0) {
            // 查看横坐标是否超过主对角线的情况,对角线上为 x + y = i
            var x = i < rows ? i : rows - 1;
            var y = i - x;
            while (x >= 0 && y < columns) {
                result.push(matrix[x][y]);
                x--;
                y++;
            }
        }
        else {
            // 为奇数时向下遍历
            var y = i < columns ? i : columns - 1;
            var x = i - y;
            while (y >= 0 && x < rows) {
                result.push(matrix[x][y]);
                x++;
                y--;
            }
        }
    }
    return result;
}
exports.PrintDiagonal = PrintDiagonal;
