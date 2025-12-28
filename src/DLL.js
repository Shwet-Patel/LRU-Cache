export class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

export class DLL {
    constructor() {
        this.head = new Node(-1,-1);
        this.tail = new Node(-1, -1);
        
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // add a new node to front  head -> new node -> existing nodes
    addToFront(node) {
        node.next = this.head.next;
        node.prev = this.head;

        this.head.next.prev = node;
        this.head.next = node;

        this.traverse();
    }

    // remove node from anywhere
    removeNode(node) {
        if (node.key === -1) {
            console.log("can not remove head or tail dummies. get out");
            return;
        }

        node.next.prev = node.prev;
        node.prev.next = node.next;
    }

    //move to front
    moveToFront(node) {
        this.removeNode(node);
        this.addToFront(node);
    }

    // traverse the DLL
    traverse() {
        let node = this.head;
        console.log('Hello, this is what DLL looks like:');
        while (node != null) {
            console.log(`{ key: ${node.key}, value: ${node.value} }`);
            node = node.next;
        }

        console.log('------------------');
    }
}

export default DLL;