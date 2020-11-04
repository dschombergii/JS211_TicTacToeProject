
let player1 = 'x'
let player2 = 'o'
let turn = 1
let mode = '1-player'
let direction = ''
let where = ''
let stopper;

const gameMode = () => {
  mode = document.getElementById('multiplayer').value
  resetGame()
}


const resetGame = () => {
  stopper = true
  document.getElementById('info').style.backgroundColor = "#BF9F47"
  document.getElementById('updates').innerHTML = "Let's play Tic-Tac-Toe!"
  turn = 1
  for (let i = 0; 0 <= 9; i++) {
    document.getElementsByClassName("cell")[i].innerHTML = ''
    document.getElementsByClassName("cell")[i].style.backgroundColor = ''
  }
  // location.reload();
}



const updateBoard = () => {
  a1 = document.getElementById('a1').innerHTML
  a2 = document.getElementById('a2').innerHTML
  a3 = document.getElementById('a3').innerHTML
  b1 = document.getElementById('b1').innerHTML
  b2 = document.getElementById('b2').innerHTML
  b3 = document.getElementById('b3').innerHTML
  c1 = document.getElementById('c1').innerHTML
  c2 = document.getElementById('c2').innerHTML
  c3 = document.getElementById('c3').innerHTML
}


const ticTacToe = (element) => {
  stopper = false
  if (mode === '1-player') {
    console.log("1 player")
    if (!document.getElementById(element.id).innerHTML) {
      addMarker(element.id)
      updateBoard()
      checkForWin()
      if (!checkForWin()) {
        document.getElementById('info').style.backgroundColor = "#D45735"
        document.getElementById('info').style.color = "white"
        document.getElementById('updates').innerHTML = "Player 2 is thinking..."
        turn = 1
        setTimeout(function () {
          if (stopper === true) {
            return;
          }
          compMove()
          document.getElementById('info').style.backgroundColor = "#11989C"
          document.getElementById('info').style.color = "white"
          document.getElementById('updates').innerHTML = "Your turn!"
        }, 1800)
        setTimeout(function () {
          updateBoard()
          checkForWin()
        }, 1900)
      }
    }
  }
  else if (mode === '2-player') {
    console.log("2 player")
    if (!document.getElementById(element.id).innerHTML) {
      addMarker(element.id)
      updateBoard()
      checkForWin()
    }
  }
}

const addMarker = (id) => {
  if (turn == 1) {
    document.getElementById(id).innerHTML = player1
    document.getElementById(id).style.color = "#11989C"
    document.getElementById('info').style.backgroundColor = "#D45735"
    document.getElementById('updates').innerHTML = "Player 2's turn!"
    turn = 2
  }
  else if (turn == 2) {
    document.getElementById(id).innerHTML = player2
    document.getElementById(id).style.color = "#D45735"
    document.getElementById('info').style.backgroundColor = "#11989C"
    document.getElementById('updates').innerHTML = "Player 1's turn!"
    turn = 1
  }
}

const compMove = () => {
  // OFFENSE
  if (a1 == "" && ((a2 == player2 && a3 == player2) || (b2 == player2 && c3 == player2) || (b1 == player2 && c1 == player2))) {
    document.getElementById('a1').innerHTML = player2
    document.getElementById('a1').style.color = "#D45735"
  }
  else if (a2 == "" && ((a1 == player2 && a3 == player2) || (b2 == player2 && c2 == player2))) {
    document.getElementById('a2').innerHTML = player2
    document.getElementById('a2').style.color = "#D45735"
  }
  else if (a3 == "" && ((a1 == player2 && a2 == player2) || (c1 == player2 && b2 == player2) || (c3 == player2 && b3 == player2))) {
    document.getElementById('a3').innerHTML = player2
    document.getElementById('a3').style.color = "#D45735"
  }
  else if (b1 == "" && ((b3 == player2 && b2 == player2) || (a1 == player2 && c1 == player2))) {
    document.getElementById('b1').innerHTML = player2
    document.getElementById('b1').style.color = "#D45735"
  }
  else if (b2 == "" && ((a3 == player2 && c1 == player2) || (c3 == player2 && a1 == player2) || (b3 == player2 && b1 == player2) || (c2 == player2 && a2 == player2))) {
    document.getElementById('b2').innerHTML = player2
    document.getElementById('b2').style.color = "#D45735"
  }
  else if (b3 == "" && ((a3 == player2 && c3 == player2) || (b2 == player2 && b1 == player2))) {
    document.getElementById('b3').innerHTML = player2
    document.getElementById('b3').style.color = "#D45735"
  }
  else if (c1 == "" && ((c3 == player2 && c2 == player2) || (a3 == player2 && b2 == player2) || (a1 == player2 && b1 == player2))) {
    document.getElementById('c1').innerHTML = player2
    document.getElementById('c1').style.color = "#D45735"
  }
  else if (c2 == "" && ((c3 == player2 && c1 == player2) || (a2 == player2 && b2 == player2))) {
    document.getElementById('c2').innerHTML = player2
    document.getElementById('c2').style.color = "#D45735"
  }
  else if (c3 == "" && ((c1 == player2 && c2 == player2) || (a1 == player2 && b2 == player2) || (a3 == player2 && b3 == player2))) {
    document.getElementById('c3').innerHTML = player2
    document.getElementById('c3').style.color = "#D45735"
  }

  // DEFENSE
  else if (a1 == "" && ((a2 == player1 && a3 == player1) || (b2 == player1 && c3 == player1) || (b1 == player1 && c1 == player1))) {
    document.getElementById('a1').innerHTML = player2
    document.getElementById('a1').style.color = "#D45735"
  }
  else if (a2 == "" && ((a1 == player1 && a3 == player1) || (b2 == player1 && c2 == player1))) {
    document.getElementById('a2').innerHTML = player2
    document.getElementById('a2').style.color = "#D45735"
  }
  else if (a3 == "" && ((a1 == player1 && a2 == player1) || (c1 == player1 && b2 == player1) || (c3 == player1 && b3 == player1))) {
    document.getElementById('a3').innerHTML = player2
    document.getElementById('a3').style.color = "#D45735"
  }
  else if (b1 == "" && ((b3 == player1 && b2 == player1) || (a1 == player1 && c1 == player1))) {
    document.getElementById('b1').innerHTML = player2
    document.getElementById('b1').style.color = "#D45735"
  }
  else if (b2 == "" && ((a3 == player1 && c1 == player1) || (c3 == player1 && a1 == player1) || (b3 == player1 && b1 == player1) || (c2 == player1 && a2 == player1))) {
    document.getElementById('b2').innerHTML = player2
    document.getElementById('b2').style.color = "#D45735"
  }
  else if (b3 == "" && ((a3 == player1 && c3 == player1) || (b2 == player1 && b1 == player1))) {
    document.getElementById('b3').innerHTML = player2
    document.getElementById('b3').style.color = "#D45735"
  }
  else if (c1 == "" && ((c3 == player1 && c2 == player1) || (a3 == player1 && b2 == player1) || (a1 == player1 && b1 == player1))) {
    document.getElementById('c1').innerHTML = player2
    document.getElementById('c1').style.color = "#D45735"
  }
  else if (c2 == "" && ((c3 == player1 && c1 == player1) || (a2 == player1 && b2 == player1))) {
    document.getElementById('c2').innerHTML = player2
    document.getElementById('c2').style.color = "#D45735"
  }
  else if (c3 == "" && ((c1 == player1 && c2 == player1) || (a1 == player1 && b2 == player1) || (a3 == player1 && b3 == player1))) {
    document.getElementById('c3').innerHTML = player2
    document.getElementById('c3').style.color = "#D45735"
  }

  // RANDOM
  else if (a1 == "") {
    document.getElementById('a1').innerHTML = player2
    document.getElementById('a1').style.color = "#D45735"
  }
  else if (a2 == "") {
    document.getElementById('a2').innerHTML = player2
    document.getElementById('a2').style.color = "#D45735"
  }
  else if (c1 == "") {
    document.getElementById('c1').innerHTML = player2
    document.getElementById('c1').style.color = "#D45735"
  }
  else if (a2 == "") {
    document.getElementById('a2').innerHTML = player2
    document.getElementById('a2').style.color = "#D45735"
  }
  else if (b2 == "") {
    document.getElementById('b2').innerHTML = player2
    document.getElementById('b2').style.color = "#D45735"
  }
  else if (c2 == "") {
    document.getElementById('c2').innerHTML = player2
    document.getElementById('c2').style.color = "#D45735"
  }
  else if (b2 == "") {
    document.getElementById('b2').innerHTML = player2
    document.getElementById('b2').style.color = "#D45735"
  }
  else if (c3 == "") {
    document.getElementById('c3').innerHTML = player2
    document.getElementById('c3').style.color = "#D45735"
  }
  else if (c2 == "") {
    document.getElementById('c2').innerHTML = player2
    document.getElementById('c2').style.color = "#D45735"
  }
}


const xWin = () => {

  if (a1 == a2 && a1 == a3 && (a1 == 'x')) { //first row
    document.getElementById('a1').style.backgroundColor = "#11989C"
    document.getElementById('a1').style.color = "white"
    document.getElementById('a2').style.backgroundColor = "#11989C"
    document.getElementById('a2').style.color = "white"
    document.getElementById('a3').style.backgroundColor = "#11989C"
    document.getElementById('a3').style.color = "white"
    direction = 'horizontally'
    where = 'on the first row!'
    return true
  } else if (b1 == b2 && b1 == b3 && (b1 == 'x')) { //second row
    document.getElementById('b1').style.backgroundColor = "#11989C"
    document.getElementById('b1').style.color = "white"
    document.getElementById('b2').style.backgroundColor = "#11989C"
    document.getElementById('b1').style.color = "white"
    document.getElementById('b3').style.backgroundColor = "#11989C"
    document.getElementById('b1').style.color = "white"
    direction = 'horizontally'
    where = 'on the second row!'
    return true
  } else if (c1 == c2 && c1 == c3 && (c1 == 'x')) { //third row
    document.getElementById('c1').style.backgroundColor = "#11989C"
    document.getElementById('c1').style.color = "white"
    document.getElementById('c2').style.backgroundColor = "#11989C"
    document.getElementById('c2').style.color = "white"
    document.getElementById('c3').style.backgroundColor = "#11989C"
    document.getElementById('c3').style.color = "white"
    direction = 'horizontally'
    where = 'on the third row!'
    return true
  } else if (a1 == b1 && a1 == c1 && (a1 == 'x')) { //first column
    document.getElementById('a1').style.backgroundColor = "#11989C"
    document.getElementById('a1').style.color = "white"
    document.getElementById('b1').style.backgroundColor = "#11989C"
    document.getElementById('b1').style.color = "white"
    document.getElementById('c1').style.backgroundColor = "#11989C"
    document.getElementById('c1').style.color = "white"
    direction = 'vertically'
    where = 'on the first column!'
    return true
  } else if (a2 == b2 && a2 == c2 && (a2 == 'x')) { //second column
    document.getElementById('a2').style.backgroundColor = "#11989C"
    document.getElementById('a2').style.color = "white"
    document.getElementById('b2').style.backgroundColor = "#11989C"
    document.getElementById('b2').style.color = "white"
    document.getElementById('c2').style.backgroundColor = "#11989C"
    document.getElementById('c2').style.color = "white"
    direction = 'vertically'
    where = 'on the second column!'
    return true
  } else if (a3 == b3 && a3 == c3 && (a3 == 'x')) { //third column
    document.getElementById('a3').style.backgroundColor = "#11989C"
    document.getElementById('a3').style.color = "white"
    document.getElementById('b3').style.backgroundColor = "#11989C"
    document.getElementById('b3').style.color = "white"
    document.getElementById('c3').style.backgroundColor = "#11989C"
    document.getElementById('c3').style.color = "white"
    direction = 'vertically'
    where = 'on the third column!'
    return true
  } else if (a1 == b2 && a1 == c3 && (a1 == 'x')) { //diagonal right
    document.getElementById('a1').style.backgroundColor = "#11989C"
    document.getElementById('a1').style.color = "white"
    document.getElementById('b2').style.backgroundColor = "#11989C"
    document.getElementById('b2').style.color = "white"
    document.getElementById('c3').style.backgroundColor = "#11989C"
    document.getElementById('c3').style.color = "white"
    direction = 'diagonally!'
    where = ''
    return true
  } else if (a3 == b2 && a3 == c1 && (a3 == 'x')) { //diagonal left
    document.getElementById('a3').style.backgroundColor = "#11989C"
    document.getElementById('a3').style.color = "white"
    document.getElementById('b2').style.backgroundColor = "#11989C"
    document.getElementById('b2').style.color = "white"
    document.getElementById('c1').style.backgroundColor = "#11989C"
    document.getElementById('c1').style.color = "white"
    direction = 'diagonally!'
    where = ''
    return true
  }
}

const oWin = () => {
  if (a1 == a2 && a1 == a3 && (a1 == 'o')) { //first row
    document.getElementById('a1').style.backgroundColor = "#D45735"
    document.getElementById('a1').style.color = "white"
    document.getElementById('a2').style.backgroundColor = "#D45735"
    document.getElementById('a2').style.color = "white"
    document.getElementById('a3').style.backgroundColor = "#D45735"
    document.getElementById('a3').style.color = "white"
    direction = 'horizontally'
    where = 'on the first row!'
    return true
  } else if (b1 == b2 && b1 == b3 && (b1 == 'o')) { //second row
    document.getElementById('b1').style.backgroundColor = "#D45735"
    document.getElementById('b1').style.color = "white"
    document.getElementById('b2').style.backgroundColor = "#D45735"
    document.getElementById('b2').style.color = "white"
    document.getElementById('b3').style.backgroundColor = "#D45735"
    document.getElementById('b3').style.color = "white"
    direction = 'horizontally'
    where = 'on the second row!'
    return true
  } else if (c1 == c2 && c1 == c3 && (c1 == 'o')) { //third row
    document.getElementById('c1').style.backgroundColor = "#D45735"
    document.getElementById('c1').style.color = "white"
    document.getElementById('c2').style.backgroundColor = "#D45735"
    document.getElementById('c2').style.color = "white"
    document.getElementById('c3').style.backgroundColor = "#D45735"
    document.getElementById('c3').style.color = "white"
    direction = 'horizontally'
    where = 'on the third row!'
    return true
  } else if (a1 == b1 && a1 == c1 && (a1 == 'o')) { //first column
    document.getElementById('a1').style.backgroundColor = "#D45735"
    document.getElementById('a1').style.color = "white"
    document.getElementById('b1').style.backgroundColor = "#D45735"
    document.getElementById('b1').style.color = "white"
    document.getElementById('c1').style.backgroundColor = "#D45735"
    document.getElementById('c1').style.color = "white"
    direction = 'vertically'
    where = 'on the first column!'
    return true
  } else if (a2 == b2 && a2 == c2 && (a2 == 'o')) { //second column
    document.getElementById('a2').style.backgroundColor = "#D45735"
    document.getElementById('a2').style.color = "white"
    document.getElementById('b2').style.backgroundColor = "#D45735"
    document.getElementById('b2').style.color = "white"
    document.getElementById('c2').style.backgroundColor = "#D45735"
    document.getElementById('c2').style.color = "white"
    direction = 'vertically'
    where = 'on the second column!'
    return true
  } else if (a3 == b3 && a3 == c3 && (a3 == 'o')) { //third column
    document.getElementById('a3').style.backgroundColor = "#D45735"
    document.getElementById('a3').style.color = "white"
    document.getElementById('b3').style.backgroundColor = "#D45735"
    document.getElementById('b3').style.color = "white"
    document.getElementById('c3').style.backgroundColor = "#D45735"
    document.getElementById('c3').style.color = "white"
    direction = 'vertically'
    where = 'on the third column!'
    return true
  } else if (a1 == b2 && a1 == c3 && (a1 == 'o')) { //diagonal right
    document.getElementById('a1').style.backgroundColor = "#D45735"
    document.getElementById('a1').style.color = "white"
    document.getElementById('b2').style.backgroundColor = "#D45735"
    document.getElementById('b2').style.color = "white"
    document.getElementById('c3').style.backgroundColor = "#D45735"
    document.getElementById('c3').style.color = "white"
    direction = 'diagonally!'
    where = ''
    return true
  } else if (a3 == b2 && a3 == c1 && (a3 == 'o')) { //diagonal left
    document.getElementById('a3').style.backgroundColor = "#D45735"
    document.getElementById('a3').style.color = "white"
    document.getElementById('b2').style.backgroundColor = "#D45735"
    document.getElementById('b2').style.color = "white"
    document.getElementById('c1').style.backgroundColor = "#D45735"
    document.getElementById('c1').style.color = "white"
    direction = 'diagonally!'
    where = ''
    return true
  }
}

const checkForTie = () => {
  if (((a1 == "x") || (a1 == "o")) && ((b1 == "x") || (b1 == "o")) && ((c1 == "x") || (c1 == "o"))
    && ((a2 == "x") || (a2 == "o")) && ((b2 == "x") || (b2 == "o")) && ((c2 == "x") || (c2 == "o"))
    && ((a3 == "x") || (a3 == "o")) && ((b3 == "x") || (b3 == "o")) && ((c3 == "x") || (c3 == "o"))) {
    return true
  }
}

const checkForWin = () => {

  if (xWin()) {
    document.getElementById('updates').innerHTML = "Player 1 wins " + direction + " " + where
    document.getElementById('info').style.backgroundColor = "#11989C"
    document.getElementById('info').style.color = "white"
    return true
  } else if (oWin()) {
    document.getElementById('updates').innerHTML = "Player 2 wins " + direction + " " + where
    document.getElementById('info').style.backgroundColor = "#D45735"
    document.getElementById('info').style.color = "white"
    return true
  } else if (checkForTie()) {
    document.getElementById('updates').innerHTML = "It's a tie! Try again?"
    document.getElementById('info').style.backgroundColor = "#BF9F47"
    document.getElementById('info').style.color = 'white'
    for (let i = 0; 0 <= 9; i++) {
      document.getElementsByClassName("cell")[i].style.backgroundColor = '#BF9F47'
    }
    return true
  }
}



// **BONUSES**

// 1. Display the current player's turn
// 2. Count number of wins for each player and display them
// 3. Reset the number of wins
// 4. Clear the board on alert window dismissal
// 5. Add players names and display who wins, i.e. "Congrats Emily, you won with 0s!"