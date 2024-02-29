class Stack{
    constructor(){
        this.items = [];
        this.top = -1;
    }
    push(data){
        this.items.push(data);
        this.top++;
    }
    pop(){
        this.items.pop()
        this.top--;
    }
    peek(){
        return this.items[this.top];
    }
    isEmpty(){
        return this.top == -1;
    }
}

let stack = new Stack;
stack.push(2);
stack.pop();
stack.push(2);
stack.push(3);
stack.push(4);
stack.peek();


console.log(stack);
console.log(stack.isEmpty());
console.log(stack.peek());




