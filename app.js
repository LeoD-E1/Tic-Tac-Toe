// Definicion de valores
const enJuego = 0;
const X = 1;
const O = 2;

//Jugadores



// Definicion de ganador cuando hay 3 en linea
//Horizontal

// Tablero del juego 
const board = [
  [0, 1, 2],
  [1, 2, 2],
  [2, 2, 1]
]

const comprobacion = (board) => {
  for (let i in board) {
    for (let j in board[i]) {
      // Horizontal
      if (board[0][0] === board[0][1] && board[0][0] === board[0][2] && board[0][0]) {
        return console.log('ganador Horizontal')
      } else if (board[1][0] === board[1][1] && board[1][0] === board[1][2] && board[1][0]) {
        return console.log('ganador Horizontal')
      } else if (board[2][0] === board[2][1] && board[2][0] === board[2][2] && board[2][0]) {
        return console.log('ganador Horizontal')
      }
      //Vertical 
      else if (board[0][0] === board[1][0] && board[0][0] === board[2][0] && board[0][0]) {
        return console.log('ganador Verical')
      } else if (board[0][1] === board[1][1] && board[0][1] === board[2][1] && board[0][1]) {
        return console.log('ganador Verical')
      } else if (board[0][2] === board[1][2] && board[0][2] === board[2][2] && board[0][2]) {
        return console.log('ganador Verical')
      }
      // Diagonal
      else if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0]) {
        return console.log('ganador Diagonal Izquierda-Derecha')
      } else if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2]) {
        return console.log('ganador Diagonal Derecha-Izquierda')
      }
      return false
    }
  }
  return
}

comprobacion(board)