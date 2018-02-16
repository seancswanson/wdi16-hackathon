import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render(){
    return (
      <div>
        <h1 className="h1--landing__hero">ShredShare</h1>
        <Link to="/search">Shred</Link>
        <Link to="/signup">Join</Link>
        <p><Link to="/login">Already registered?</Link></p>
      </div>
      );
  }
}

export default Home;
