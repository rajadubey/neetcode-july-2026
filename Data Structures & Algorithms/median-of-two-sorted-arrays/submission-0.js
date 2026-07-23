class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const n1 = nums1.length
        const n2 = nums2.length

        let i = 0;
        let j = 0;

        let mid1 = 0;
        let mid2 = 0;

        const limit = Math.floor((n1 + n2) / 2);

        for (let c = 0;c<limit+1; ++c) {
            mid2 = mid1;

            if (i < n1 && j < n2) {
                if (nums1[i] > nums2[j]) {
                    mid1 = nums2[j];
                    j++;
                } else {
                    mid1 = nums1[i];
                    i++;
                }
            } else if (i < n1) {
                mid1 = nums1[i]
                i++;
            } else {
                mid1 = nums2[j++];
            }
        }

        if ((n1 + n2) % 2 === 1) return mid1;
        return (mid1+mid2) / 2;
    }
}
