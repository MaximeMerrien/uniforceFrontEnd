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
        <h1 className="uniforceTeam-title">Team Page</h1>
        <div className="gamers-list">{gamersCards}</div>       
      </div>   
    )
  }
}

export default UniforceTeam