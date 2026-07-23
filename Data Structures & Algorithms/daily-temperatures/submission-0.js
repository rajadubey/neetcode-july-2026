class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);

        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            const temptemp = temperatures[i];

            while (stack.length > 0 && temptemp > stack[stack.length - 1][0]){
                const [, index] = stack.pop();
                result[index] = i - index;
            }
            stack.push([temptemp, i])
        }
        return result;
    }
}
