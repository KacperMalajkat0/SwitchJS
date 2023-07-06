class Stack<T> {
    private stack: T[];
  
    constructor() {
      this.stack = [];
    }
  
    push(item: T): void {
      this.stack.push(item);
    }
  
    pop(): T | undefined {
      return this.stack.pop();
    }
  
    peek(): T | undefined {
      return this.stack[this.stack.length - 1];
    }
  
    isEmpty(): boolean {
      return this.stack.length === 0;
    }
  
    size(): number {
      return this.stack.length;
    }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);

console.log(numberStack.peek());

const poppedNumber = numberStack.pop();
console.log(poppedNumber);
console.log(numberStack.size());

const stringStack = new Stack<string>();
stringStack.push('hello');
stringStack.push('world');

console.log(stringStack.peek());

const poppedString = stringStack.pop();
console.log(poppedString);
console.log(stringStack.size());
