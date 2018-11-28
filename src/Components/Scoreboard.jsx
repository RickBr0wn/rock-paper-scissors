import React from 'react'

const Scoreboard = ({ playerScore, compScore }) => {
  return <div className="scoreboard">
      <div className="player-labels user">User</div>
      <div className="scores">{`${playerScore} : ${compScore}`}</div>
      <div className="player-labels comp">Comp</div>
    </div>
}

export default Scoreboard