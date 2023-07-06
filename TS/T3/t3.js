var Stack = /** @class */ (function () {
    function Stack() {
        this.stack = [];
    }
    Stack.prototype.push = function (item) {
        this.stack.push(item);
    };
    Stack.prototype.pop = function () {
        return this.stack.pop();
    };
    Stack.prototype.peek = function () {
        return this.stack[this.stack.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.stack.length === 0;
    };
    Stack.prototype.size = function () {
        return this.stack.length;
    };
    return Stack;
}());
var numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log(numberStack.peek());
var poppedNumber = numberStack.pop();
console.log(poppedNumber);
console.log(numberStack.size());
var stringStack = new Stack();
stringStack.push('hello');
stringStack.push('world');
console.log(stringStack.peek());
var poppedString = stringStack.pop();
console.log(poppedString);
console.log(stringStack.size());
