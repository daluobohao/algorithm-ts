"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.RouteSumWithRoute = exports.RouteSum = void 0;
/**
 *  计算是否有一条路径上的总和等于目标和
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
function RouteSum(root, sum) {
    var getSum = function (root, sum, total) {
        // 判断是否为叶子节点，若是叶子节点计算当前路径上的和
        if (!root.left && !root.right) {
            total += root.val;
            if (total === sum) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            // 如果只存在左子树
            if (root.left && !root.right) {
                return getSum(root.left, sum, total + root.val);
            }
            // 如果只存在右子树
            else if (root.right && !root.left) {
                return getSum(root.right, sum, total + root.val);
            }
            else {
                return (getSum(root.left, sum, total + root.val) || getSum(root.right, sum, total + root.val));
            }
        }
    };
    // 如果传入的是空树
    if (!root || root.val === undefined) {
        return false;
    }
    return getSum(root, sum, 0);
}
exports.RouteSum = RouteSum;
/**
 * 给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。
 *
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
function RouteSumWithRoute(root, sum) {
    var result = [];
    var getSumRoute = function (root, sum, total, array) {
        if (array === void 0) { array = []; }
        // 判断是否为叶子节点，若是叶子节点计算当前路径上的和
        if (!root.left && !root.right) {
            total += root.val;
            if (total === sum) {
                array.push(root.val);
                result.push(array);
            }
        }
        else {
            array.push(root.val);
            // 如果只存在左子树
            if (root.left && !root.right) {
                getSumRoute(root.left, sum, total + root.val, __spreadArray([], array, true));
            }
            // 如果只存在右子树
            else if (root.right && !root.left) {
                getSumRoute(root.right, sum, total + root.val, __spreadArray([], array, true));
            }
            else {
                getSumRoute(root.left, sum, total + root.val, __spreadArray([], array, true));
                getSumRoute(root.right, sum, total + root.val, __spreadArray([], array, true));
            }
        }
    };
    // 如果传入的是空树
    if (!root) {
        return [];
    }
    getSumRoute(root, sum, 0);
    return result;
}
exports.RouteSumWithRoute = RouteSumWithRoute;
