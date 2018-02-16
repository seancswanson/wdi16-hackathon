import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render(){
    return (
      <div className="div--wrapper__landing">
        <img src="hero.png" />
        <Link className="a--landing__shred" to="/search">Shred</Link>
        <Link className="a--landing__join" to="/signup">Join</Link>
        <p><Link className="a--landing__login" to="/login">Already registered?</Link></p>
      </div>
      );
  }
}

export default Home;
