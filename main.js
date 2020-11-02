'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// creates and empty "board" for the user to see where marks can be placed.
// using let because the variable is expected to change with more 'X's and 'O's to add
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let blankBoard = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

// assigns the first mark as 'X'
// using let because the variable is expected to change from 'X' to 'O' and back
let currentMarker = 'X';

let winner;
let direction;

// is a function that print the current status of the board using the variable - board
const printBoard = () => {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

const resetBoard = () => {
  console.log("Try again!")
  currentMarker = "X"
  board = blankBoard
}  

const changeMarker = () => {
  if(currentMarker === "X"){
    currentMarker = "O"
    } else {
    currentMarker = "X"
  }
}

const horizontalWin = () => {
  // Your code here to check for horizontal wins
  if ((board[0][0] == currentMarker && board[0][1] == currentMarker && board[0][2] == currentMarker)
  || (board[1][0] == currentMarker && board[1][1] == currentMarker && board[1][2] == currentMarker)
  || (board[2][0] == currentMarker && board[2][1] == currentMarker && board[2][2] == currentMarker)){
    return true
  } 
}

const verticalWin = () => {
  // Your code here to check for vertical wins
  if ((board[0][0] == currentMarker && board[1][0] == currentMarker && board[2][0] == currentMarker)
  || (board[0][1] == currentMarker && board[1][1] == currentMarker && board[2][1] == currentMarker) 
  || (board[0][2] == currentMarker && board[1][2] == currentMarker && board[2][2] == currentMarker)) {
    return true
  } 
}

const diagonalWin = () => {
  // Your code here to check for diagonal wins
  if ((board[0][0] == currentMarker && board[1][1] == currentMarker && board[2][2] == currentMarker)
  ||(board[2][0] == currentMarker && board[1][1] == currentMarker && board[0][2] == currentMarker)) {
    return true 
  } 
}

const checkForTie = () => {
  let tie = true
  for (let i = 0; i < 3; i++) {
    for (let x = 0; x < 3; x++) {
      if (board[i][x] == "") {
        tie = false
      }
    }
  }
  if (tie) {
    return true
  }
}

const checkForWin = () => {
  // Your code here call each of the check for types of wins
  if(horizontalWin() || verticalWin() || diagonalWin()) {
    return true
  } else {
    changeMarker()
    checkForTie()
  }
}

const ticTacToe = (row, column) => {
  // Your code here to place a marker on the board
  // then check for a win
  board[row][column] = currentMarker;
  checkForWin();
}

const getPrompt = () => {
  printBoard();
  console.log("It's Player " + currentMarker + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });
}


// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      ticTacToe(0, 0)
      ticTacToe(0, 1)
      ticTacToe(1, 1)
      ticTacToe(0, 2)
      ticTacToe(2, 2)
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
