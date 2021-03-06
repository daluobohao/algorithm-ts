"use strict";
exports.__esModule = true;
/**
 * 递归两两交换相邻的节点
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function Exchange(head) {
    // 如果遍历到最后一个或最后为单数节点
    if (head === null || head.next === null) {
        return head;
    }
    // 找到后面要交换的节点
    var next = head.next;
    // head链接后面已经完成的子链
    head.next = Exchange(next.next);
    // next 链接head
    next.next = head;
    return next;
}
exports["default"] = Exchange;
