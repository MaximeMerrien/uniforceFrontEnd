import React, { Component} from 'react'
import "../assets/jss/Home.css"


class Home extends Component{  
  constructor () {
    super()
  }

  render () {
    return(
      <div className="Home">
        {/* <h1 className="Home-title">UNI-FORCE tv</h1> */}
        <div className="Twitch">
          <div className="Player-embed">
            <div id="twitch-embed"></div>
          </div>
        </div>
        {/* <div className="Twitch">
          <div className="Twitch-channel-player">
            <div className="Twitch-player">
              <iframe
                src="https://player.twitch.tv/?channel=uniforce_tv&parent=localhost&muted=true"
                height="720"
                width="1280"
                frameborder="0"
                scrolling="no"
                allowfullscreen="true"
              />                
            </div>
          </div>
          <div className="Twitch-channel-chat">
            <div className="Twitch-chat">
              <iframe
                frameborder="0"
                scrolling="no"
                src="https://www.twitch.tv/embed/uniforce_tv/chat?parent=localhost&theme=dark"
                height="500"
                width="350"
              />  
            </div>
          </div>
        </div> */}
        {/* <div class="Push"></div> */}
      </div>
    )
  }
}

export default Home