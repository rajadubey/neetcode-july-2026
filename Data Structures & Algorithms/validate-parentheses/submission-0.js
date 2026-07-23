class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const ar = [];

        const closeMap = {
            ')': '(',
            ']': '[',
            '}': '{',
        };

        for (const c of s) {
            const isClosing = c === ')' || c === '}' || c === ']';

            if (closeMap[c]) {
                if (ar.length > 0 && ar[ar.length - 1] === closeMap[c]) {
                    ar.pop();
                } else {
                    return false
                }
            } else {
                ar.push(c);
            }
        }

        return ar.length === 0;
    }
}
