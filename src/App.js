import React, { Component} from "react"
import "./assets/jss/App.css"
import {Animated} from "react-animated-css"

class App extends Component{


    render () {
        return(
            <div className="App">
                <div className="Header">
                    <div className="LogoContain">
                        <Animated animationIn="flipInX" animationOut="fadeOut" isVisible={true}>
                            <img src={require('./assets/img/logo_final.png')} className="logo" alt="Logo" />
                        </Animated>
                        <div className="Icons">
                            <a href="https://twitter.com/UniForceTV"><img src={require('./assets/img/icon/twitter.svg')} alt="logo twitter"/></a>
                            <a href="https://instagram.com/tvuniforce"><img src={require('./assets/img/icon/instagram.svg')} alt="logo instagram"/></a>
                        </div>
                    </div>
                </div>
                <div className="Menu">
                    <a > Nos Joueurs </a>
                </div>
                <div>
                    <h1 className="waiting-text"> Uniforce Tv </h1>
                    <iframe src="https://player.twitch.tv/?channel=uniforce_tv" frameBorder="0" allowFullScreen="true"
                            scrolling="no" height="378" width="620"/>
                </div>

            </div>
        )
    }
}

export default App