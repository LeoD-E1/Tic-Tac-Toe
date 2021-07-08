import { positionsWin } from './const'

const getPlayerWon = (positions, jugador, flatBoard) => positions.every((position) => flatBoard[position] === jugador)

const iteratePositions = (board) => {
  const flatBoard = board.flat()
  for (let z = 0; z < positionsWin.length; z++) {
    const playerOneWon = getPlayerWon(positionsWin[z], 1, flatBoard)
    if (playerOneWon) return 1
    const playerTwoWon = getPlayerWon(positionsWin[z], 2, flatBoard)
    if (playerTwoWon) return 2
  }
  return flatBoard.includes(0) ? -1 : 0
}

export default iteratePositions