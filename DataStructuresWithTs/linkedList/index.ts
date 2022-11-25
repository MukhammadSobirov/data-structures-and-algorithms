interface NodeInterface {
  data: any;
  next: null | string;
}

class NodeEl implements NodeInterface {
  data: any;
  next: null;
  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  head: null | any;
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  insertAtHead(data: any) {
    const temp = new NodeEl(data);
    temp.next = this.head;
    this.head = temp.data;
    return this;
  }

  printList() {
    if (this.head === null) {
      console.log('emty list');
      return;
    }
    let i = this.head;
    while (i !== null) {
      console.log(JSON.stringify(i.data));
      console.log('--->');
      i = i.next;
    }
    console.log('null');
    return;
  }
}

const node1 = new NodeEl({id: '123', value: 12});
const node2 = new NodeEl(1);
const node3 = new NodeEl('hello');
const node4 = new NodeEl('tea');

const list = new LinkedList();
list.insertAtHead(node1);
list.insertAtHead(node2);
list.insertAtHead(node3);
list.insertAtHead(node4);

list.printList();
