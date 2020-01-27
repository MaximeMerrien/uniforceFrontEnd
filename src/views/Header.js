import React, { Component} from 'react'
// import "../assets/jss/Header.css"
import Menu from './Menu'
import {Animated} from "react-animated-css"


class Header extends Component{  
  render () {
    return(
      <div className="Header">
        <div className="Logo-contain">
          <Animated animationIn="flipInX" animationOut="fadeOut" isVisible={true}>
            {/* <div className="Logo-box"> */}
              <img className="Logo" src={require('../assets/img/logo_neon.png')} alt="Logo" />
            {/* </div>             */}
          </Animated>
        </div>
        <Menu />
      </div>
    )
  }
}

export default Header