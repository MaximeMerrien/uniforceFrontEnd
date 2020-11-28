import React, { Component} from 'react'
import "../assets/jss/Home.css"
const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js'

class Home extends Component{ 

  constructor () {
    super()
  }

  componentDidMount() {
    console.log('home mounted')
    let embed;
    const script = document.createElement('script')
    script.setAttribute(
      'src',
      EMBED_URL
    )
    script.addEventListener('load', () => {
      embed = new window.Twitch.Embed("twitch-embed", {
          width: '100%',
          height: '100%',
          channel: 'uniforce_tv',
          theme: 'dark',
          muted: true
    })
  })
        document.body.appendChild(script)
  }

  render () {
    return(
      <div className="Home">
        <div className="Twitch">
          <div id="twitch-embed"></div>
        </div>
      </div>
    )
  }
}

export default Home