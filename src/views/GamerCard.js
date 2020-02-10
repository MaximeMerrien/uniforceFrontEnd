import React, { Component} from "react"
import "../assets/jss/GamerCard.css"

class GamerCard extends Component{  

  constructor() {
    super()
    this.onClickTrue = this.onClickTrue.bind(this);
    this.onClickFalse = this.onClickFalse.bind(this);
    this.state = {showMe: false}
  }

  
  onClickTrue(){
    this.setState({ showMe : true} )
    console.log('click')
  }
  onClickFalse(){
    this.setState({ showMe : false} )
    console.log('click')
  }

  render () {
    if(this.state.showMe){
      // verso (hover)
      return(
        <div className="GamerCard" onMouseLeave={this.onClickFalse}>
          {/* <div className="Gamer-shield">
            <div className="Gamer-photo">
              <img src={require('../assets/img/logo_final.png')} alt="Photo du joueur" />
            </div>
            <div className="Gamer-pseudo">{this.props.gamer.pseudo}</div>
            <div className="Gamer-motto">{this.props.gamer.motto}</div>          
          </div> */}
          <div className="Gamer-description">Type de jeux : {this.props.gamer.typeGame}</div>
          <div className="Gamer-description">Jeux préférés : {this.props.gamer.favGame}</div>
        </div>
      )
    } else {
      // recto
      return(
        <div className="GamerCard" onMouseEnter={this.onClickTrue}>
          <div className="Gamer-shield">
            <div className="Gamer-photo">
              <img src={require('../assets/img/logo_final.png')} alt="Photo du joueur" />
            </div>
            <div className="Gamer-pseudo">{this.props.gamer.pseudo}</div>
            <div className="Gamer-motto">{this.props.gamer.motto}</div>          
          </div>
        </div>
      )
    }    
  }
}

export default GamerCard