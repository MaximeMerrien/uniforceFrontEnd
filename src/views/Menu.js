import React, { Component} from 'react'
import { Link } from 'react-router-dom'
import {Animated} from "react-animated-css"

class Menu extends Component{ 
  
  render () {
    const navStyle = {
      color: 'black'
    }
    return(
      <nav>
        <div className="Logo-contain">
          <Animated animationIn="flipInX" animationOut="fadeOut" isVisible={true}>
            {/* <div className="Logo-box"> */}
              <img className="Logo" src={require('../assets/img/logo_final.png')} alt="Logo" />
            {/* </div>             */}
          </Animated>
        </div>          
        <ul className="Nav-links">
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