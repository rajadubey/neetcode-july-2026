/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        const n = intervals.length;
        for (let i = 0; i < n; i++) {
            const t1 = intervals[i];

            for (let j = i + 1; j < n; j++) {
                const t2 = intervals[j];

                const max = Math.max(t1.start, t2.start);
                const min = Math.min(t1.end,t2.end);
                if (min > max) return false;
            }
        }
        return true;
    }
}
