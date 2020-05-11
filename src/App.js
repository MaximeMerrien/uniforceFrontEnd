import React, { Component } from 'react'
import './assets/jss/App.css'
import ComingSoon from './views/ComingSoon'
import Header from './views/Header'
import Home from './views/Home'
import UniforceTeam from './views/UniforceTeam'
import Footer from './views/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component{
  constructor () {
    super()
    this.state = {
      // récupérer les données +tôt initialiser un tableau 
      // webpagedata : []
      webpagedata : 'chocolat'
    }
  }
  
  // WIP for http request
  // componentDidMount(){
  //     fetch("hhtfzfjzfnfzfo", {
  //       method:'POST',
  //       body:JSON.stringify({
  //         "kzfjzlfnfln":"fihhf"
  //       })
  //     }).then(res => res.json).then(data =>{
  //       this.setState(prevState => {
  //         webpagedata: data
  //       })
  //     })
  // }

  

  render () {   
    return(
      <Router>
        <div className="App">
          {/* <ComingSoon></ComingSoon> */}
          <Header/>
          <p>{this.state.webpagedata}</p>
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