import React, { Component } from 'react';
import SimpleMap from './SimpleMap.js';

class Search extends Component {
  render() {
    return (
      <div>
        <div className="div--wrapper__map" style={{width: '100%', height: '400px', position:'absolute', top: '24px'}}>
        <div className="div--searchbar">
          <span className="icon-mag"></span>
          <input className="input--search" type="text" />
          <input className="input--submit" type="submit" value="Go Shred" />
        </div>
        <SimpleMap/>
        <div className="div--toolbar">
        <a href="#"><span><i className="fa fa-plus"></i>Add Spot</span>

</a>
        <a href="#"><span><i className="fa fa-location-arrow"></i>Share</span></a>
        <a href="#"><span><i className="fa fa-filter"></i>Filters</span></a>
        <a href="#"><span><i className="fa fa-ellipsis-h"></i>More</span></a>
        </div>
        </div>
        </div>
      )
  }
}


export default Search;