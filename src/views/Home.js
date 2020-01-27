import React, { Component} from 'react'
// import "../assets/jss/Home.css"


class Home extends Component{  
  render () {
    return(
      <div className="Home">
        {/* <h1 className="Home-title">UNI-FORCE tv</h1> */}
        <div className="Twitch">
          <iframe
            src="https://player.twitch.tv/?channel=uniforce_tv"
            frameBorder="0"
            allowFullScreen="true"
            scrolling="no"            
            />
        </div>
      </div>
    )
  }
}

export default Home