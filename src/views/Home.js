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
        <div>
          <iframe frameborder="0"
          scrolling="no"
          id="chat_embed"
          src="https://www.twitch.tv/embed/uniforce_tv/chat?parent=localhost"
          height="500"
          width="350">
          </iframe>
        </div>
        <div class="Push"></div>
      </div>
    )
  }
}

export default Home