class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        const stack2 = [];
        let min = this.stack[this.stack.length - 1];

        while (this.stack.length > 0) {
            min = Math.min(min, this.stack[this.stack.length - 1]);
            stack2.push(this.stack.pop());
        }

        while (stack2.length > 0) {
            this.stack.push(stack2.pop());
        }
        return min;
    }
}
