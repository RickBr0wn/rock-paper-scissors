import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Scoreboard from './Components/Scoreboard'
import GameControls from './Components/GameControls'
import { rock, paper, scissors } from './Components/images'
import GameCounter from './Components/GameCounter'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      computersGuess: '',
      playerScore: 0,
      compScore: 0,
      gameResult: '-',
      seconds: '*',
    }

    this.secondsRemaining = 3
    this.intervalHandle = null
  }

  ticker = () => {
    this.setState({ seconds: this.secondsRemaining })
    if (this.secondsRemaining === 0) {
      clearInterval(this.intervalHandle)
      this.setState({ seconds: 'bang!', gameResult: 'You win!!' })
    }
    this.secondsRemaining--
  }

  countdown = async () => {
    await this.setState({ seconds: 'ddd' })
    this.intervalHandle = setInterval(this.ticker, 2000)
    this.secondsRemaining = 3
    await this.setState({ seconds: this.secondsRemaining })
  }

  playerClick = () => {
    console.log('clicked!!')
    this.countdown()
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Scoreboard
            playerScore={this.state.playerScore}
            compScore={this.state.compScore}
          />
        </div>
        <div className="container">
          <p className="game-result">{this.state.gameResult}</p>
        </div>
        <div className="container">
          <GameCounter seconds={this.state.seconds} />
        </div>
        <div className="container">
          <GameControls
            rock={rock}
            paper={paper}
            scissors={scissors}
            playerClick={this.playerClick}
          />
        </div>
        <div className="container statement">
          <h3>Make your move!</h3>
        </div>
      </div>
    )
  }
}

export default App
