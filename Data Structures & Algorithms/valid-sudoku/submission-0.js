class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const createSudokuArray = () => Array.from({ length: 9 }, () => Array(9).fill(false))
        const rows = createSudokuArray();
        const columns = createSudokuArray();
        const cells = createSudokuArray();

        for (let i = 0; i< 9; ++i) {
            for (let j = 0; j< 9; ++j) {
                if (board[i][j] === '.') continue;
                let valIndex = board[i][j].charCodeAt(0) - '1'.charCodeAt(0);
                let cellIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (rows[i][valIndex] || columns[j][valIndex] || cells[cellIndex][valIndex]) {
                    return false;
                }
                rows[i][valIndex] = columns[j][valIndex] = cells[cellIndex][valIndex] = true;
            }
        }
        return true;
    }
}
