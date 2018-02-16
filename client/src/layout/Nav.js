import React, { Component } from 'react';
import Logout from '../auth/Logout.js';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render(){
    let links = <span />;
    if(this.props.user){
      links = (
        <span>
          <Link to="/profile">Profile</Link>
          <Logout updateUser={this.props.updateUser} />
        </span>);
    }
    else {
      links = (
        <span>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </span>);
    }

    return(
        <div>
          <nav>
            <div className="nav">
              <div className="nav-header">
                <div className="nav-title">
                  SH
                </div>
              </div>
              <div className="nav-btn">
                <label htmlFor="nav-check">
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>
              <input type="checkbox" id="nav-check" />
              <div className="nav-links">
                <span><Link to="/search">Explorer</Link></span>
                 {links}  
              </div>
            </div>
          </nav>
        </div>
      );
  }
}

export default Nav;
