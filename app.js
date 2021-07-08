// Tablero del juego 
const board = [
  [1, 1, 2],
  [1, 2, 1],
  [2, 2, 0]
]

// definiendo las posiciones ganadoras
const positionWin = [
  //Horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // Vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonal
  [0, 4, 8],
  [2, 4, 6]
]

/*
  Funcion para unir el tablero
  con el fin de que todas las 
  posiciones esten en un solo 
  array 
*/

const joinBoard = (board) => {
  let boardJoin = []
  for (let o in board) {
    boardJoin.push(...board[o])
  }
  return boardJoin
}

/*
  Funcion para que con un array de posicion
  rastree la posicion de cada numero en ese
  indice.
*/

const findWithPosition = (arr, tablero) => {
  let foundArray = []
  for (let k in arr) {
    for (let i = 0; i <= tablero.length; i++) {
      foundArray.push(tablero[arr[k]])
      if (foundArray !== 0 && foundArray) {
        if (foundArray[0] === foundArray[1] && foundArray[1] === foundArray[2]) {
          // Verificar cual es el valor del mismo
          validationWinner(foundArray)
        } else { //Empate
          console.log(0, 'Empate')
        }
      } else {
        return console.log(-1, 'El juego sigue');
        break
      }
      break
    }
  }
  return foundArray
}

const validationWinner = (arr) => {
  switch (arr[0]) {
    case 1:
      return console.log('1, gano X');
    case 2:
      return console.log('2, Gano O')
    default:
      break
  }
}

const iteratePositons = (positions) => {
  for (let z in positions) {
    findWithPosition(positions[z], joinBoard(board))
  }
}

iteratePositons(positionWin)