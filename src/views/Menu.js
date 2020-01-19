import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import {Animated} from "react-animated-css"

class Menu extends Component{ 
  
  render () {
    const navStyle = {
      color: 'white'
    }
    return(
      <nav>
        <div className="LogoContain">
          <Animated animationIn="flipInX" animationOut="fadeOut" isVisible={true}>
            <img src={require('../assets/img/logo_final.png')} className="logo" alt="Logo" />
          </Animated>
          <div className="Icons">
            <a href="https://twitter.com/UniForceTV"><img src={require('../assets/img/icon/twitter.svg')} alt="logo twitter"/></a>
            <a href="https://instagram.com/tvuniforce"><img src={require('../assets/img/icon/instagram.svg')} alt="logo instagram"/></a>
          </div>
        </div>          
        <ul className="nav-links">
          <Link style={navStyle} to='/'>
            <li>Home</li>
          </Link>
          <Link style={navStyle} to='/team'>
            <li>Uniforce Team</li>
          </Link>              
        </ul>
      </nav>
    )
  }
}

export default Menu