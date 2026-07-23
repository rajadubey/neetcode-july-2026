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
            const r = calculate();
            const l = calculate();

            if ('+' === c) {
                return l+r;
            } else if ('-' === c) {
                return l-r;
            }else if ('*' === c) {
                return l*r;
            }else if ('/' === c) {
                return (l / r) >> 0;
            }
        }
        return calculate();
    }
}
