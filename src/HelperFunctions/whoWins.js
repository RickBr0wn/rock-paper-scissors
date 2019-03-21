/**
 * A method that returns the winning player in a rock, paper, scissors game
 * @param {String} string - Player 1 selection
 * @param {String} string - Player 2 selection
 * *
 * @returns {String} - 'PLAYER_1' || 'PLAYER_2' || 'DRAW'
 */
export default function whoWins(player1, player2) {
  switch (player1) {
    case 'ROCK':
      if (player2 === 'ROCK') {
        return 'DRAW'
      } else if (player2 === 'PAPER') {
        return 'PLAYER_2'
      } else {
        return 'PLAYER_1'
      }

    case 'PAPER':
      if (player2 === 'ROCK') {
        return 'PLAYER_1'
      } else if (player2 === 'PAPER') {
        return 'DRAW'
      } else {
        return 'PLAYER_2'
      }

    case 'SCISSORS':
      if (player2 === 'ROCK') {
        return 'PLAYER_2'
      } else if (player2 === 'PAPER') {
        return 'PLAYER_1'
      } else {
        return 'DRAW'
      }

    default:
      return ''
  }
}
