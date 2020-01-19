import React, { Component} from "react"
import "./assets/jss/App.css"
import ComingSoon from "./views/ComingSoon"
// import GamerCard from "./views/GamerCard"
// import gamersInfos from "./datas/gamersInfos"

class App extends Component{
  // constructor () {
  //   super()
  //   this.state = {
  //     gamersList: gamersInfos
  //   }
  // }
  
  render () {   
    // const gamersCards = this.state.gamersList.map(gamer => <GamerCard key={gamer.id} gamer={gamer}/>)
    return(
      <div className="App">
        <ComingSoon></ComingSoon>
      </div>
    )
  }
}

export default App