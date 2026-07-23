class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rowCount = matrix.length;
        const colCount = (matrix[0]).length;

        let top = 0;
        let bottom = rowCount - 1;

        while (top <= bottom) {
            const row = Math.floor((top+bottom) / 2);

            if (target > matrix[row][colCount - 1]) {
                top = row + 1;
            } else if (target < matrix[row][0]) {
                bottom = row - 1;
            } else break;
        }

        if (!(bottom >= top)) {
            return false;
        }

        const row = Math.floor((top+bottom) / 2);
        let left = 0;
        let right = colCount - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (target > matrix[row][mid]) {
                left = mid + 1;
            } else if (target < matrix[row][mid]) {
                right = mid - 1;
            } else return true;
        }
        return false;
    }
}
