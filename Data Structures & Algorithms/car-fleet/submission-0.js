class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const matrix = position.map((item, index) => [item, speed[index]]);

        matrix.sort((a,b) => b[0] - a[0]);

        const stack = [];

        for (let [pos, speed] of matrix) {// pos, speed
            const time = (target - pos) / speed;
            stack.push(time); // distance / 

            const n = stack.length;
            const sameFleet = stack[n - 1] <= stack[n - 2];
            if (stack.length >= 2 && sameFleet) {
                stack.pop();
            }
        }
        return stack.length;
    }
}
