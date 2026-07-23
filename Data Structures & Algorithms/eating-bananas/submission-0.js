class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
    const n = piles.length;
    let min = 1;
    let max = Math.max(...piles);

    while (min < max) {
        const mid = Math.floor((min+max)/2);
        let cal = 0;
        for (let i = 0;i<n; ++i) {
            const p = piles[i];
            cal += Math.floor(p/mid);
            if (p%mid !== 0) {
                cal++;  
            }
            if (cal > h) break;
        }

        if (cal <= h) {
            max = mid;
        } else {
            min = mid + 1;
        }
    } 
    return min;
}
}
