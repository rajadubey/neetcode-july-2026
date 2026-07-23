class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        const map = new Map();

        while (i < numbers.length) {
            const required = target - numbers[i];
            if (map.has(required)) {
                return [map.get(required), i + 1];
            }
            map.set(numbers[i], i + 1);
            i++;
        }
        return [];
    }
}
