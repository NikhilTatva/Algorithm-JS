import Stack from "../DS/Stack";

describe("Stack", () => {
  it("should push an item", () => {
    let stack = new Stack<number>(3);
    stack.push(1);
    expect(stack.count()).toBe(1);
  });

  it("should pop an item", () => {
    let stack = new Stack<number>(3);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.count()).toBe(2);
  });

  it("should peek an item", () => {
    let stack = new Stack<number>(3);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek(0)).toBe(1);
    expect(stack.count()).toBe(3);
  });

  it("should throw an error if index is out of bounds in peek", () => {
    let stack = new Stack<number>(3);
    expect(() => stack.peek(3)).toThrow("Index out of bounds");
  });

  it("should throw an error if stack is empty in pop", () => {
    let stack = new Stack<number>(3);
    expect(() => stack.pop()).toThrow("Stack is empty");
  });

  it("should throw an error if stack is full in push", () => {
    let stack = new Stack<number>(3);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(() => stack.push(4)).toThrow("Stack is full");
  });

  it("should be empty if no items are pushed", () => {
    let stack = new Stack<number>(3);
    expect(stack.isEmpty()).toBe(true);
  });

  it("should be not empty if items are pushed", () => {
    let stack = new Stack<number>(3);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  it("should be full if all items are pushed", () => {
    let stack = new Stack<number>(3);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.isFull()).toBe(true);
  });

  it("should be not full if not all items are pushed", () => {
    let stack = new Stack<number>(3);
    stack.push(1);
    stack.push(2);
    expect(stack.isFull()).toBe(false);
  });

  it("should change an item", () => {
    let stack = new Stack<number>(3);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.change(0, 4);
    expect(stack.peek(0)).toBe(4);
  });

  it("should display all items", () => {
    let stack = new Stack<number>(3);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.display();
  });
});
