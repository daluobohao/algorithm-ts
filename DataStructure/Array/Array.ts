class myArray<T> {
    data: Array<T>
    len: number
    constructor() {
        this.data = []
    }

    // 增加yuansu 
    public push(item: any): void {
        this.data.push(item)
        this.len++
    }
    public unshift(item: any): void {
        this.data.unshift(item)
        this.len++
    }

    // 删除元素
    public pop(): T {
        this.len--
        return this.data.pop()
    }
    public shift(): T {
        this.len--
        return this.data.shift()
    }

    // 替换
    public splice(index: number, num: number, item: any): void {
        this.data.splice(index, num,  item)
    }

}

export default myArray