import React, { Component } from 'react';
import SimpleMap from './SimpleMap.js';

class Search extends Component {
  render() {
 var shredLoactions = [
                      {
                        name: "Judkins Skatepark",
                        address: "2100 S Judkins St, Seattle, WA 98144",
                        lat: 47.5920995,
                        lng: -122.30492529999998
                      },
                      {
                        name: "Westlake Park",
                        address: "401 Pine St, Seattle, WA 98101",
                        lat: 47.6118256,
                        lng: -122.33699050000001
                      },
                      {
                        name: "Del Ridge Skatepark",
                        address: "2414 SW Genesee St, Seattle, WA 98106",
                        lat: 47.56485499999999,
                        lng: -122.36402179999999
                      },
                      {
                        name: "Marginal Way",
                        address: "1 S Hanford St, Seattle, WA 98134",
                        lat: 47.5755814,
                        lng: -122.34000659999998
                      },
                      {
                        name: "Seatle Center",
                        address: "305 Harrison St, Seattle, WA 98109",
                        lat: 47.6207455,
                        lng: -122.35043330000002
                      },
                      {
                        name: "Skatedot Crown Hill",
                        address: "9089 Holman Rd NW, Seattle, WA 98117",
                        lat: 47.6969021,
                        lng: -122.37320940000001
                      },
                      {
                        name: "Skate Dot Capitol Hill",
                        address: "200 Summit Ave E, Seattle, WA 98102",
                        lat: 47.619869,
                        lng: -122.3249424
                      },
                      {
                        name: "Judkins Skatepark",
                        address: "2100 S Judkins St, Seattle, WA 98144",
                        lat: 47.5920995,
                        lng: -122.30492529999998
                      },
                      {
                        name: "All Together Skatepark",
                        address: "3500 Stone Way N, Seattle, WA 98103",
                        lat: 47.6495993,
                        lng: -122.3423224
                      },
                      {
                        name: "Jefferson Park",
                        address: "3801 Beacon Ave S, Seattle, WA 98108",
                        lat: 47.569759,
                        lng: -122.3084566
                      },
                      {
                        name: "Green Lake",
                        address: "Green Lake Way N & N 54th St, Seattle, WA 98103",
                        lat: 47.6677642,
                        lng: -122.34006790000001
                      },
                      {
                        name: "Ballard Bowl",
                        address: "5701 22nd Ave NW, Seattle, WA 98107",
                        lat: 47.6704585,
                        lng: -122.38549069999999
                      }                                                                                                                                                                                                                          
                      ];
                      const nearbyPlaces = shredLoactions.map((shredLocation) => (
        <li><span>{shredLocation.name}: </span><span>{shredLocation.address}</span></li>))
    return (
      <div>
        <div className="div--wrapper__map" style={{width: '100%', height: '400px', position:'absolute', top: '19px'}}>
        <div className="div--searchbar">
          <span className="icon-mag"><i className="fa fa-search"></i></span>
          <input className="input--search" type="text" />
          <input className="input--submit" type="submit" value="Go Shred" />
        </div>
        <SimpleMap shredlocations={shredLoactions}/>
        <div className="div--toolbar">
        <a href="#"><span><i className="fa fa-plus"></i>Add Spot</span></a>
        <a href="#"><span><i className="fa fa-location-arrow"></i>Share</span></a>
        <a href="#"><span><i className="fa fa-filter"></i>Filters</span></a>
        <a href="#"><span><i className="fa fa-ellipsis-h"></i>More</span></a>
        </div>
        <div className="div--container__ul">
        <span className="span--nearby">Nearby Spots</span>
        <ul className="ul--nearbyplaces">
      { nearbyPlaces }
      </ul>
      </div>
        </div>
        </div>
      )
  }
}


export default Search;