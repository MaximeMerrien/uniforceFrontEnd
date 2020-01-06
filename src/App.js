import React, { Component} from "react"
import "./assets/jss/App.css"
import {Animated} from "react-animated-css"

class App extends Component{

  
  render () {
    return(
      <div className="App">
        <Animated animationIn="flipInX" animationOut="fadeOut" isVisible={true}>
          <img src={require('./assets/img/logo_final.png')} className="logo" alt="Logo" />
        </Animated>        
        <h1 className="waiting-text"> Site en construction</h1>
      </div>
    )
  }
}

export default App