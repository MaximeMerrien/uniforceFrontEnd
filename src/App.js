import React, { Component } from 'react'
import './assets/jss/App.css'
import ComingSoon from './views/ComingSoon'
import Menu from './views/Menu'
import Home from './views/Home'
import UniforceTeam from './views/UniforceTeam'
import Footer from './views/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// import GamerCard from "./views/GamerCard"
// import gamersInfos from "./datas/gamersInfos"

class App extends Component{
  constructor () {
    super()
    this.state = {}
  }
  
  render () {   
    return(
      <Router>
        <div className="App">
          {/* <ComingSoon></ComingSoon> */}
          <Menu/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/team" component={UniforceTeam} />            
          </Switch>
          <Footer/> 
        </div>
      </Router>      
    )
  }
}

export default App