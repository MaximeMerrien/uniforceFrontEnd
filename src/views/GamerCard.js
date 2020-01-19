import React, { Component} from "react"
import "../assets/jss/GamerCard.css"

class GamerCard extends Component{  
  render () {
    return(
      <div className="GamerCard">
        <div className="gamer-shield">
          <div className="gamer-pseudo">{this.props.gamer.pseudo}</div>
          <div className="gamer-photo"></div>
          <div className="gamer-motto">{this.props.gamer.motto}</div>          
        </div>
        <div className="gamer-description">{this.props.gamer.description}</div>       
      </div>
    )
  }
}

export default GamerCard