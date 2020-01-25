import React, { Component} from 'react'
// import "../assets/jss/Footer.css"


class Footer extends Component{  
  render () {
    return(
      <div className="Footer">
        <div className="Icons">
            <a href="https://twitter.com/UniForceTV"><img src={require('../assets/img/icon/twitter.svg')} alt="logo twitter"/></a>
            <a href="https://instagram.com/tvuniforce"><img src={require('../assets/img/icon/instagram.svg')} alt="logo instagram"/></a>
        </div>
      </div>
    )
  }
}

export default Footer