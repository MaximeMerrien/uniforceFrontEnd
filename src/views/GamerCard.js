import React, { Component} from "react"
import "../assets/jss/GamerCard.css"

class GamerCard extends Component{  
  render () {
    return(
      <div className="GamerCard">
        <div className="Gamer-shield">
          <div className="Gamer-pseudo">{this.props.gamer.pseudo}</div>
          <div className="Gamer-photo"></div>
          <div className="Gamer-motto">{this.props.gamer.motto}</div>          
        </div>
        <div className="Gamer-description">{this.props.gamer.description}</div>       
      </div>
    )
  }
}

export default GamerCard