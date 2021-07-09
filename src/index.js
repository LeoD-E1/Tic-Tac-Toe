import { positionsWin, player1, player2 } from './const'

const getPlayerWon = (positions, player, flatBoard) => positions.every((position) => flatBoard[position] === player)

const iteratePositions = (board) => {
  const flatBoard = board.flat()

  for (let z = 0; z < positionsWin.length; z++) {
    const playerOneWon = getPlayerWon(positionsWin[z], player1, flatBoard)
    if (playerOneWon) return 1
    const playerTwoWon = getPlayerWon(positionsWin[z], player2, flatBoard)
    if (playerTwoWon) return 2
  }

  return flatBoard.includes(0) ? -1 : 0
}

export default iteratePositions