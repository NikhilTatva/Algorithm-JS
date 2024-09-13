class Stack<T> {
  stack: Array<T>;
  size: number;
  top: number;
  constructor(sizeOfStack: number) {
    this.stack = [];
    this.size = sizeOfStack;
    this.top = -1;
  }

  push(item: T) {
    if (this.top < this.size - 1) {
      this.top++;
      this.stack[this.top] = item;
    } else {
      throw new Error("Stack is full");
    }
    return this.stack;
  }

  pop() {
    if (this.top > -1) {
      this.top--;
      return this.stack[this.top + 1];
    } else {
      throw new Error("Stack is empty");
    }
  }

  isEmpty() {
    return this.top === -1 ? true : false;
  }

  isFull() {
    return this.top === this.size - 1 ? true : false;
  }

  peek(index: number) {
    if (index >= 0 && index < this.size - 1) {
      return this.stack[index];
    } else {
      throw new Error("Index out of bounds");
    }
  }

  count() {
    return this.top + 1;
  }

  change(index: number, value: T) {
    if (index >= 0 && index < this.size - 1) {
      this.stack[index] = value;
      return this.stack;
    } else {
      throw new Error("Index out of bounds");
    }
  }

  display() {
    let arr: Array<T> = [];
    for (let i = 0; i <= this.top; i++) {
      arr.push(this.stack[i]);
    }
    console.log(arr);
  }
}

export default Stack;
