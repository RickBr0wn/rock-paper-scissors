import React, { Component } from 'react'

export class GameButton extends Component {
  render() {
    const { src, height, width, alt, handleClick, id } = this.props
    return <div>
        <img src={src} height={height} width={width} alt={alt} onClick={() => handleClick(id)} />
      </div>
  }
}

export default GameButton
