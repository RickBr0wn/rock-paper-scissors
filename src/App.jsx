import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Scoreboard from './Components/Scoreboard'
import GameControls from './Components/GameControls'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gameButtons: [
        {
          type: 'rock',
          isActive: false,
          width: '48',
          height: '48',
          src:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALqSURBVGhD7ZlL6A1RHMevt5BHHnllgZL3TikkQpHHwsZjQVjYyiMrZYEsiIV3NmSDhUd/VixsbAhFeYfyWFD8Q17x+c6Zc5s7Hf1dM2fm3JpPfZpzbt3bfO+c38w5Z2oVFa3JGByPnaNeCzIOb+Pv2Cc4DVuKHngfL+AoHILH8Q0OwOAZFB9n4nfsG/UMXfE1rsVtqJCHcCoGQSfcjB9QQ+glnsEXmOYG/kINs33Yht9wHpbORvyE63ASbsEf+Lcgj7F31DPsxUemWS4PUCef5DC6guxEDa0kE1FXcmDUKxENldmmWWc0LjLNDtHNQEF0LBWdxAzTrDMFd5tmA5twjmnWSQbpFVsKriC63S41zQbmoh6QSWyQq/gTVV/nsfCh5grSDV1DZTgmC13YIHdQt215F89hobiCzMIrptnAEVxtmnVskORv6Pu6MoUOM1eQrNhwrqvqDVeQZopd05lT8dESTJBmil2z4vXx0RJMkGaKXYyNj5ZggjRT7CroV/HREkyQrAQTpCr2mGCCVMUek3uQLqiTXIOLsT+mcQXJSq5BpuND1A9qra01eDtuRS1vLUEHmY9f8BiqcEVP1JVRmINowwQd5BJqM2Fw1GtEJ/0ZtXkggg6iwruJWhf00wcptLRVmF0YdBChPap7qJ2P5B3FouH3FYMPIkbiU7yM3fVBioWofanggwg9rN7iaXRtRC/DvPd0vQQRk1F3seVRzz/egogDqJrRQ9I3XoMMRW2Nboh6fvEaRGxH1Utyl90H3oPo6f4M90c9f3gPIhagdgTT+715MgEVxE6PvKEXNJp6D4t6+bMEdZdMTk69oGWppjDS9dTPykm8aJr+GYHP8Rr20Qc5oTfA2i7VFKgwVIx623QLNa6zoj9Hb7TORr2C0VRfrwE0gdQbqf+5OnpRuhK1gNMV9jFc/5lV+A4/4nU8gUc7ULWgF6LvUQu2HaiNi9LRP7kCtehynbjLPajvuPYDKioqcqNW+wMkWMAxXNmXsgAAAABJRU5ErkJggg==',
          alt: '',
        },
        {
          type: 'paper',
          isActive: false,
          width: '48',
          height: '48',
          src:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATySURBVGhD7ZlprF9DGIevLWIJaoul9ogiog0iYg9iadQHS4JaW1uINqpI7QlfJITYI4hUIpEoidpCQkiIFkWJtWlQGjsVey3Pc+6dmnvunHvmnP8/+uX8kif3P3PmvGdmzjvvvHPuQKdOnTp16tSp0/+m1WEfuBRuHfo7FvqiVWEXOBk0fBGcCJtBr7Lje4N2n4Kf4J8S1h0ErbQhnAQPwldQNi5/w3NgR3K1GuwFM+EJWAZlm2/DLXAOPATWvwFZWgUmwBXwMiyH+AEfgIO6EW6AOfADeM22Z0NKdnwPmAGPw48Q27Xj74BudCxsDLG838H6jLWsqNLBcB8shfgBP4MzdgHsAClp+Br4C+zQEaAb7g7T4DH4HmK78i7cDsfDplCnL8H7yoMstB74oPgBH4MzcxSsDbmaDt7/LXwz9DvGt3k3uK42hyY6D7Rh30bI1/U82MCHz4Jx0Fa+hcUQOv4R3AMGhy2gqfSAi+E1CDZPgBG6ELz4HexoRR/k2tHmVUWpmVyfe8J1sBBC5+VzOA6S+gxspI/2S8EF7ihK9VoDDoXb4FOIO/813A9Hg+0qZWMHo4v1S0eCdp8sSmmtC86u0U9viDuva94M7hfZ/fJGR9xUG8A6gz9HaCfQ7ntF6T8ZlaaCofdXiDu/AIx646GVNHLt4M8sOYDr4Reo2pjWBEPwb6DPHwIvgaE5dNy9wCBjlNsOepZGLxv8WatTQZ8NnZFtIKWw9raER4Z+x/wOLuaHwYVtOHazrHrLtdJo7kDCRvksGFb9fQak5Bvw+n6gS00Bs4C54D5QzhYCvslP4BlwnZwLrpXaXM6bcwfijB0AkyE8eDakZL3XbZuS7ueub7Q0TJtH6aq6bLBdxqDwChjddNdhskHuQNRhoFsE48b2lFx3Xr+yKOXLDXVbMMUxszYLeBFSyarZyIqcy4qcgZhia/gP8J6rIayDnaGs08FrbSJilTYCXfVyCDnXTVCobiDmWafBm2DbP8EkUD0A1p1flIZLF/TaF+CCrsJ9RHvuK01k6uJ68nziW6wciGnCCxC7kYNxRoKMYtYblcraGsJ9OZhMNs3FHISDKdxLI6mBBB938ZnCuyjdE2J57LSNyWYxK5Ese83oZPpRhWHXBWxbN1AzbteVrmmGsBuk0vuQPbxflJCF1ECMKvtCXQrvTGrDIBDL/cV6Q3adxkDqWBujZ5iHedB7FXRx683rClnIWexVCtmzR1IXo1ofzLOsN4XPkXuL7T1G6A33gnuO7uxk6EJeDzgwN9IVuZiVvQzEN/chaMdj6DwIR1hDszt7nSaBHU0emIZk5qstvwnoKU7WMPU6ELUVPA3aitHtzAJGYz6EHOwUaC0NNN20qnQXxAPJxWBxFvQkDd05+LMn7Q/a8kPFJZCKUIFjwLdh+7egL2chjY3mm7ky/9GWZ4ocmeX6Jryn6UeIpMw0NTaxKLWX0Uk7bpK5ct/wnu2LUo/SNzW2CDaxoqX8SqIdY/yIiJKQx9y6SNVIJoOmInbC0Nnmk40yPLqXaMfw+zr4CSeF0SzsC05A3+Sb8Iufhv2o5mJtMyDtPArlzSuFzzkT+i7dwWw0PMjOLAEPO6lZTeEbcReOz+baMUIdDh7MxO9n5dys7zoQPK2Fj9Jt8AuJOZERbFdYqTLT9ZzscTTMZB3+38QEsFOnTp06jaKBgX8BYNbZ+2P3L60AAAAASUVORK5CYII=',
          alt: '',
        },
        {
          type: 'scissors',
          isActive: false,
          width: '48',
          height: '48',
          src:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKfSURBVGhD7ZjJy81RGIA/GaPMItPOglhJFqzIEDZIypBhoZQkfYXwB1BCFhZ2UqSQsqCUJHMyZWnKkFhQyDw8z/nu6XeTm+m+9/Pdfk89fb/3/W7nnPeec+8957SUlJSUlDQj/bB722PHoBt2antMLMG7+A0/42kci5n/rrjpeBU/4Rs8jJvRAvRj1fML9H8W+AU/4BEcgu3KfPyKDvId+s7nQesG7IpD8WIll61+/R3sgtILq2e2IeSlsxUdyEA8Vck9weoBzULzFj4PO6Ovv4Hm9+ODyvN7PIa+AeEMQDt9maKCyWj+VooKauVXo/nsa3TZ+WyReabCGIl29jBFBePQfK1CzqWoYA6a11UmYBjeQ3Mu31BqFTIKzV9LUcEkNP9jIbnAx1i9FDeh+Z0pCqRWIQ5mPU5NUYG/J5fRAVaTCzmfooKFaP5QigKpVcifMhiv4NoUFcxG2z+RokDqVUgtGlbIcGyKQvpgUxQyCDt8IVPwPtqRfyMIL2QivkU7eYpLMYLQQnqjg7eDA+gGL4rQQlrRxs+im75IQgu5hDY+LUWxhBbiIcltuGeMaMIK8fNhw69SFE9YIZ4LnA1txHk7dGk9Qhsfk6JYQgvxYsHG16UoltBCFqGN38ToC4LQQnriM7SDuSYCCS1E1qAdXMfIWcln+eMpCsBvrHxtEzkrK9A+9qUoiOUYPSs70D68mQzDfZa3g1Gz4m9WnvUJJiKxADvyYOVpsZ54EWHbtzH62zFxBu3wKPYwUQe8HvJy23ZnmmgEI/A52ukF/JdffDeizoT3vra3HRvKaMzr2X3YSdyCi3HBb7gSd6NL1DZ0G0afd35KX9yD+d38W90xzMB2pz8uw114EN2b/cq9uBHHY0M+2CUlJSUldaSl5Tv4zOmPUWh7YwAAAABJRU5ErkJggg==',
          alt: '',
        },
      ],
      playerScore: 0,
      compScore: 0,
      gameResult: 'Choose wisely young jedi..',
      playersChoice: null,
      requiredClass: null,
    }
  }

  handleClick = idToBeSetActive => {
    let changedButtons = this.state.gameButtons
    changedButtons.map((button, index) => {
      if(button.isActive) {
        button.isActive = false
      }
      if (index === idToBeSetActive) {
        button.isActive = !button.isActive
      }
    })
    this.setState({ gameButtons: changedButtons })
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
          <GameControls
            gameButtons={this.state.gameButtons}
            handleClick={this.handleClick}
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