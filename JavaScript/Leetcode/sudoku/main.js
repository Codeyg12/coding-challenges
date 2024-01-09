const isValidSudoku = (board) => {
  for (const arr of board) {
    let xMap = {};
    for (let num of arr) {
      if (!xMap[num] && num != ".") {
        xMap[num] = 1;
      } else if (xMap[num] && num != ".") {
        console.log("no1");
        return false;
      }
    }
  }
  let yMap = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {}, 7: {}, 8: {} };
  for (let col = 0; col < board[0].length; col++) {
    for (let row = 0; row < board.length; row++) {
      let num = board[row][col];
      if (!yMap[col][num] && num != ".") {
        yMap[col][num] = 1;
      } else if (yMap[num] && num != ".") {
        console.log("no2");
        return false;
      }
    }
  }
  console.log("yes");
  return true;
};

isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);

// Output: true

isValidSudoku([
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);
// Output: false
