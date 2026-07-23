class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        let minPrice = prices[0];

        prices.forEach((p) => {
            max = Math.max(max, p - minPrice);

            minPrice = Math.min(minPrice, p);
        });
        return max;
    }
}
