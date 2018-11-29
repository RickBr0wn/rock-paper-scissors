import React from 'react'
import GameButton from './GameButton'

const GameControls = ({ gameButtons, handleClick }) => {
  return (
    <div className="game-controls-container">
      {gameButtons.map((button, index) => {
        return (
          <div key={index} className={button.isActive ? 'active icon pulse' : 'icon'}>
            <GameButton
              src={button.src}
              height={button.height}
              width={button.width}
              alt={button.alt}
              isActive={button.isActive}
              handleClick={handleClick}
              id={index}
            />
          </div>
        )
      })}
    </div>
  )
}

export default GameControls
