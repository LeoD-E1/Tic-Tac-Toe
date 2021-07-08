// Tablero del juego 
const board = [
  [2, 1, 1],
  [2, 2, 1],
  [1, 2, 1]
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
  // Verificar si hay un cero en el tablero
  const zero = tablero.includes(0)
  if (zero) return console.log(-1)

  for (let k in arr) {
    for (let i = 0; i <= 8; i++) {
      foundArray.push(tablero[arr[k]])
      break
    }
  }
  validationWinner(foundArray)
}

const validationWinner = (arr) => {
  if (arr[0] === arr[1] && arr[1] === arr[2]) {
    switch (arr[0]) {
      case 1:
        return console.log(1, 'Ganaron X')
      case 2:
        return console.log(2, 'Ganaron O')
      default:
        break
    }
  }
}

const iteratePositons = (positions) => {
  for (let z = 0; z <= 7; z++) {
    findWithPosition(positions[z], joinBoard(board))
  }
}

iteratePositons(positionWin)