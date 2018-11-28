import React from 'react'

const GameControls = ({ rock, paper, scissors, playerClick }) => {
  return <div className="game-controls-container">
      <div className="icon rock" onClick={playerClick}>
        <img src={rock.src} height={rock.height} width={rock.width} alt={rock.alt} />
      </div>
      <div className="icon paper" onClick={playerClick}>
      <img src={paper.src} height={paper.height} width={paper.width} alt={paper.alt} />
        
      </div>
      <div className="icon scissors" onClick={playerClick}>
        <img src={scissors.src} height={scissors.height} width={scissors.width} alt={scissors.alt} />
      </div>
    </div>
}

export default GameControls
