import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => 
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,    
  }}>
    {text}
  </div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 47.6062, lng: -122.3321},
    zoom: 11
  };

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
    const allLocations =  shredLoactions.map((shredLocation) => (
                              <AnyReactComponent
                                lat={shredLocation.lat}
                                lng={shredLocation.lng}
                                text={shredLocation.name}
                              />
                            ));
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
      { allLocations }
      </GoogleMapReact>
    );
  }
}
export default SimpleMap;