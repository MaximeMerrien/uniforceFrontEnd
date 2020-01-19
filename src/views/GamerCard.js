import React, { Component} from "react"
import "../assets/jss/GamerCard.css"

class GamerCard extends Component{  
  render () {
    return(
      <div className="GamerCard">
        <div className="card-header">
          <div className="card-photo">Photo</div>
          <div className="card-infos">
            <h2 className="card-infos-title">{this.props.gamer.pseudo}</h2>
            <div className="card-infos-content">
              <div>Prénom: {this.props.gamer.firstname}</div>
              <div>Nom: {this.props.gamer.lastname}</div>
              <div>Age: {this.props.gamer.age}</div>
            </div>
          </div>
        </div>
        <div className="card-header">
          <div className="card-left-content">
            <div>Other: {this.props.gamer.firstname}</div>
            <div>Other: {this.props.gamer.lastname}</div>
            <div>Other: {this.props.gamer.age}</div>
          </div>
          <div className="card-main-content">
            <div className="card-description">
              {this.props.gamer.description}
            </div>

          </div>
        </div>       
      </div>
    )
  }
}

export default GamerCard