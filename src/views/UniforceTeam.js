import React, { Component} from 'react'
// import "../assets/jss/UniforceTeam.css"
import GamerCard from "../views/GamerCard"
import gamersInfos from "../datas/gamersInfos"


class UniforceTeam extends Component{  
  constructor () {
    super()
    this.state = {
      gamersList: gamersInfos
    }
  }
  render () {
    const gamersCards = this.state.gamersList.map(gamer => <GamerCard key={gamer.id} gamer={gamer}/>)
    return(
      <div className="UniforceTeam">
        {/* <h1 className="UniforceTeam-title">UNI-FORCE Team</h1> */}
        <div className="Gamers-list">{gamersCards}</div>       
      </div>
    )
  }
}

export default UniforceTeam