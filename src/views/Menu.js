import React, { Component} from 'react'
import { NavLink } from 'react-router-dom'

class Menu extends Component{ 
  
  render () {
    // const navStyle = {
    //   color: 'black'
    // }
    // const isActive = (path, match, location) => !!(match || path === location.pathname);
    return(
      <nav>
        <ul className="Nav-links">
          <NavLink
            to='/' className="Nav-link" exact
            activeClassName="Nav-link--active"
          >
            <li>Uni-force Tv</li>
          </NavLink>
          <NavLink
            to='/team' className="Nav-link"
            activeClassName="Nav-link--active"
          >
            <li>Uni-force Team</li>
          </NavLink>
        </ul> 
      </nav>
    )
  }
}

export default Menu