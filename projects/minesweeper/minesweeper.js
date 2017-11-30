document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    /*{row: 0, col: 0, isMine: false, hidden: true}, {row: 0, col: 1, isMine: false, hidden: true}, {row: 0, col: 2, isMine: true, hidden: true}, {row: 0, col: 3, isMine: true, hidden: true}, {row: 0, col: 4, isMine: false, hidden: true},

    {row: 1, col: 0, isMine: true, hidden: true}, {row: 1,col: 1, isMine: false, hidden: true}, {row: 1, col: 2, isMine: false, hidden: true}, {row: 1, col: 3, isMine: false, hidden: true}, {row: 1, col: 4, isMine: false, hidden: true},

    {row: 2, col: 0, isMine: true, hidden: true}, {row: 2, col: 1,isMine: false, hidden: true}, {row: 2, col: 2, isMine: false, hidden: true}, {row: 2, col: 3, isMine: false, hidden: true}, {row: 2, col: 4, isMine: false, hidden: true},

    {row: 3, col: 0, isMine: true, hidden: true}, {row: 3, col: 1, isMine: false, hidden: true}, {row: 3, col: 2, isMine: true, hidden: true}, {row: 3, col: 3, isMine: false, hidden: true}, {row: 3, col: 4, isMine: true, hidden: true},

    {row: 4, col: 0, isMine: false, hidden: true}, {row: 4, col: 1, isMine: false, hidden: true}, {row: 4, col: 2, isMine: true, hidden: true}, {row: 4, col: 3, isMine: false, hidden: true}, {row: 4, col: 4, isMine: false, hidden: true},
    */
  ]
}

function createBoard(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      board.cells.push({
        row: i,
        col: j,
        isMine: (Math.random() < 0.2),
        isMarked: false,
        hidden: true,
        surroundingMines: 0
      })
    }
  }
}

function startGame () {
  createBoard(6)
  //loop through contents of each cell and then call countSurroundingMines
  let cell = 0; //start counting from cell 0
  for (cell in board.cells) { //for every cell in the cells board
    board.cells[cell].surroundingMines = countSurroundingMines(cell); //new object called surroundingMines is linked to the countSurroundingMines function below, and this applies to every cell

  }
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
  document.addEventListener('click', checkForWin) //no need to do cell[i].document.addEventListener like the last game because we're not counting the cells, just the document in general
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

  //for each cell, check conditions for winning:
  for (let cell in board.cells) {
    if (board.cells[cell].isMine){ // if it's a mine
      if (!(board.cells[cell].hidden)) { // but it's not marked
        return;
      }
    }
    if (board.cells[cell].hidden) { //there's a hidden cell
      if (!(board.cells[cell].isMine)) // which isn't a mine
      return;
    }
  }

// You can use this function call to declare a winner (once you've
// detected that they've won, that is!)
lib.displayMessage('You win! Your cats live for another day!');
playSound(true);
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surroundingCells = lib.getSurroundingCells(board.cells[cell].row, board.cells[cell].col);
  let count = 0
  // let square = undefined
  for (let square in surroundingCells) {
    if (surroundingCells[square].isMine) {
      count++
    }
  }
  return count
}

function playSound(hasWon) {
  if (hasWon) {
    document.getElementsByTagName("audio")[0];
    audio.play();
  } else {
    document.getElementsByTagName("audio")[1];
    audio.play();
  }

}
