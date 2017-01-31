import React, { Component } from 'react'
import logo from '../images/automte-white.svg'

class Logo extends Component {
  render () {
    return (
      <div className="Logo">
        <img src={logo} alt="Automte logo" />
      </div>
    )
  }
}

export default Logo
