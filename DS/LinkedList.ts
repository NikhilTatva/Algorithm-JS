class _Node<T> {
  value: T;
  next: _Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkList<T> {
  head: _Node<T> | null;
  constructor() {
    this.head = null;
  }

  insertAtBegin(value: T) {
    const node = new _Node(value);
    node.next = this.head;
    this.head = node;
  }

  insertAtLast(value: T) {
    const node = new _Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let pointer = this.head;
      while (pointer.next !== null) {
        pointer = pointer.next;
      }
      pointer.next = node;
    }
  }

  insertAtRandom(value: T, location: number) {
    const node = new _Node(value);
    if (this.head === null) {
      if (location !== 0) {
        throw new Error("Invalid location");
      } else {
        this.head = node;
      }
    } else {
      let pointer = this.head;
      for (let i = 0; i < location - 1; i++) {
        if (pointer.next === null) {
          throw new Error("Invalid location");
        } else {
          pointer = pointer.next;
        }
      }
      node.next = pointer.next;
      pointer.next = node;
    }
  }

  deletionAtBegin() {
    if (this.head !== null) {
      let pointer = this.head;
      this.head = pointer.next;
      pointer = null;
    } else {
      throw new Error("List is empty");
    }
  }

  deletionAtRandom() {}

  deletionAtLast() {}

  search() {}

  display() {
    let pointer = this.head;
    const arr = [];
    while (pointer !== null) {
      arr.push(pointer.value);
      pointer = pointer.next;
    }
    console.log(arr);
  }
}

const myList = new LinkList<number>();

myList.insertAtBegin(1);
myList.insertAtBegin(4);
myList.insertAtBegin(3);
myList.insertAtLast(5);

myList.insertAtRandom(8, 2);

myList.deletionAtBegin();
myList.deletionAtBegin();
myList.deletionAtBegin();
myList.deletionAtBegin();

myList.display();
