export const ticker = () => {
  this.setState({ seconds: this.secondsRemaining })
  if (this.secondsRemaining === 0) {
    clearInterval(this.intervalHandle)
    this.setState({ seconds: 'bang!', gameResult: 'You win!!' })
  }
  this.secondsRemaining--
}

export const countdown = async () => {
  await this.setState({ seconds: 'ddd' })
  this.intervalHandle = setInterval(this.ticker, 2000)
  this.secondsRemaining = 3
  await this.setState({ seconds: this.secondsRemaining })
}

export const playerClick = () => {
  console.log('clicked!!')
  this.countdown()
}