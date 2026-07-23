class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const calculate = () => {
            const c = tokens.pop();
            const possibleNonNum = '+-*/';
            const isNum = !possibleNonNum.includes(c);
            if (isNum) {
                return +c;
            }
            const l = calculate();
            const r = calculate();

            if ('+' === c) {
                return l+r;
            } else if ('-' === c) {
                return l-r;
            }else if ('*' === c) {
                return l*r;
            }else if ('/' === c) {
                return l/r;
            }
        }
        return calculate();
    }
}
