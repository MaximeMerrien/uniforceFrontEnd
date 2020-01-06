import React, { Component} from "react"
// import { Image } from "react-bootstrap"
import "./assets/jss/App.css"
// import logo from "../assets/img/logo_final.png"
//const logo = require('../assets/img/logo_final.png');

class App extends Component{

  
  render () {
    return(
      <div className="App">
        <img src={require('./assets/img/logo_final.png')} alt="Logo" />
        <h1> Site en construction</h1>
      </div>
    )
  }
}

// function App () {
//   return (
//     <div className="App">
//       <h1> Hello, World! </h1>
//     </div>
//   )
// }

export default App