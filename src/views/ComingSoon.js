import React, { Component} from "react"
import "../assets/jss/ComingSoon.css"
import {Animated} from "react-animated-css"


class ComingSoon extends Component{  
  render () {
    return(
      <div className="ComingSoon">
        <div className="forLogo">
            <Animated animationIn="flipInX" animationOut="fadeOut" isVisible={true}>
                <img src={require('../assets/img/logo_final.png')} className="logo" alt="Logo" />
            </Animated>        
        </div>       
        <h1 className="waiting-text">Site en construction</h1>
      </div>
    )
  }
}

export default ComingSoon