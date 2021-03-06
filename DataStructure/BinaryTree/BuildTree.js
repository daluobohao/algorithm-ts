"use strict";
exports.__esModule = true;
exports.buildTreeByPostAndIn = exports.buildTreeByPreAndIn = void 0;
var BinaryTree_1 = require("./BinaryTree");
/**
 * 根据前序遍历与中序遍历序列构造二叉树
 *
 * @param {number[]} preorder 先序遍历序列
 * @param {number[]} inorder 中序遍历序列
 * @return {TreeNode}
*/
function buildTreeByPreAndIn(preorder, inorder) {
    if (!preorder.length && !inorder.length) {
        return null;
    }
    // 前序遍历的第一个节点即为二叉树根节点
    var root = new BinaryTree_1.TreeNode(preorder[0]);
    // 获取根节点在中序序列中的位置
    var position = inorder.indexOf(root.val);
    // 中序遍历中根节点之前的节点为左子树节点
    var midLeft = inorder.slice(0, position);
    // 中序遍历中根节点之后的节点为右子树节点
    var midRight = inorder.slice(position + 1);
    // 前序序列中根节点之后与中序遍历左子树节点相同长度为左子树
    var preLeft = preorder.slice(1, position + 1);
    // 前序序列中的右子树
    var preRight = preorder.slice(position + 1);
    // 递归生成左子树和右子树
    root.left = buildTreeByPreAndIn(preLeft, midLeft);
    root.right = buildTreeByPreAndIn(preRight, midRight);
    return root;
}
exports.buildTreeByPreAndIn = buildTreeByPreAndIn;
/**
 *
 * @param {number[]} postOrder
 * @param {number[]} inOrder
 *
 * @return {TreeNode}
 */
function buildTreeByPostAndIn(postOrder, inOrder) {
    if (!postOrder.length && !inOrder.length) {
        return null;
    }
    // 后序遍历的最后一个节点为根节点
    var root = new BinaryTree_1.TreeNode(postOrder[postOrder.length - 1]);
    // 获取根节点在中序遍历中的位置
    var position = inOrder.indexOf(root.val);
    // 中序序列根节点之前的均为左子树
    var midLeft = inOrder.slice(0, position);
    // 中序序列根节点之后的均为右子树
    var midRight = inOrder.slice(position + 1);
    // 后序序列从前开始的左子树长度与中序序列相同
    var postLeft = postOrder.slice(0, position);
    // 后序序列的右子树
    var postRight = postOrder.slice(position, postOrder.length - 1);
    root.left = buildTreeByPostAndIn(postLeft, midLeft);
    root.right = buildTreeByPostAndIn(postRight, midRight);
    return root;
}
exports.buildTreeByPostAndIn = buildTreeByPostAndIn;
