import React, { Component } from 'react';

class Footer extends Component {
  render(){
    return(
        <div className="footer">
            <span className="footer-text">Created by <a href="#" target="_blank">Ernest Grjalva</a> <a href="#" target="_blank"></a> <a href="#" target="_blank"> Alex Gustafson</a> <a href="#" target="_blank">Justin Mitchell</a> <a href="#" target="_blank">
Sean Swanson</a> &copy; {new Date().getFullYear()}</span>
        </div>
      );
  }
}

export default Footer;
