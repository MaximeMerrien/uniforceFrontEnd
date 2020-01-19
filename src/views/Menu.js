import React, { Component} from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component{ 
  
  render () {
    const navStyle = {
      color: 'white'
    }
    return(
      <nav>
          <h3>logo</h3>
          <ul className="nav-links">
            <Link style={navStyle} to='/'>
              <li>Home</li>
            </Link>
            <Link style={navStyle} to='/team'>
              <li>Uniforce Team</li>
            </Link>              
          </ul>
      </nav>
    )
  }
}

export default Menu