// 单链表结构
function List() {
    // 节点
    let Node = function(element) {
            this.element = element;
            this.next = null;
        }
        // 初始头节点为null
    let head = null;
    // 链表长度
    let length = 0;
    // 操作
    this.getList = function() { return head }
    this.search = function(element) {
        let p = head
        if (!p) { return false }
        while (p) {
            if (p.element === element) { return true }
            p = p.next
        }
        return false
    }
    this.append = function(element) {
        let node = new Node(element)
        let p = head
        if (!head) {
            head = node
        } else {
            while (p.next) {
                p = p.next
            }
            p.next = node
        }
        length += 1
    }
    this.insert = function(position, element) {
        let node = new Node(element)
        if (position >= 0 && position <= length) {
            let prev = head,
                curr = head,
                index = 0
            if (position === 0) {
                node.next = head
                head = node
            } else {
                while (index < position) {
                    prev = curr
                    curr = curr.next
                    index += 1
                }
                prev.next = node
                node.next = curr
            }
            length += 1
        } else {
            return null
        }
    }
    this.remove = function(element) {
        let p = head,
            prev = head
        if (!head) return
        while (p) {
            if (p.element === element) {
                p = p.next
                prev.next = p
            } else {
                prev = p
                p = p.next
            }
        }
    }
    this.isEmpty = function() {
        return !length
    }
    this.size = function() {
        return length
    }
    this.getElementAt = function(position) {
        if (position < 0 || position >= length) { return null };

        let current = head;
        for (let i = 0; i < position; i++) {
            current = current.next;
        }
        return current;
    }
}

let list = new List();
for (let i = 0; i < 5; i += 1) {
    list.append(i)
}
console.log(list.isEmpty());
console.log(list.size());
console.log(list.insert(5, 5));
console.log(list.search(4));
console.log(list.search(11));
console.log(list.size());
console.log(list.remove(4));
console.log(list.getElementAt(5));