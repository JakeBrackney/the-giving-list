import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {


  render() {
    return (
      <div>
        <nav className='nav-wrapper'> <h1>The Giving List</h1>
          <div className='nav-elements'>
              <Link to='/giving/neworg' type="submit" className='header-link'>New Organization</Link> 
              <Link to='/giving' type="submit" className='header-link'>Home</Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;