import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render(){
    return (
      <div className="div--wrapper__landing">
      <div className="image"></div>
        <img src="hero.png" />
        <Link className="a--landing__shred" to="/search">Shred</Link>
        <Link className="a--landing__join" to="/signup">Join</Link>
        <p><Link className="a--landing__login" to="/login">Already registered?</Link></p>
        <h1>"ShredShare has helped me scope out the sickest spots in the city and connect me with fellow skaters! - Eric Koston"</h1>
      </div>
      );
  }
}

export default Home;
