// 创建链表节点
class ListNode {
    val: any
    next: ListNode
    constructor(element: any) {
        this.val = element
        this.next = null
    }
}

// 创建链表

class LinkList2 {
    head: ListNode
    length: number
    constructor() {
        this.head = null
        this.length = 0
    }

    // 找到链表的元素
    public find(index: number): ListNode {
        let current:ListNode = this.head
        for(let i = 0; i < index; i++) {
            current = current.next;
        }
        return current
    }
    // 追加
    public append(element: any): void {

        let node = new ListNode(element)
        let current
        if(!this.head) {
            this.head = node
        } else {
            current = this.head
            while(current.next) {
                current = current.next
            }
            current.next = node
        }
        ++this.length
    }

    // 删除节点
    public delete(index:number):void {
        if(index == 0) {
            this.head = this.head.next

        } else if(this.find(index) === null || this.find(index).val === null) {
            throw Error('该节点不存在')
        } else {
            let pre = this.find(index - 1)
            pre.next = pre.next.next
        }
    }
}