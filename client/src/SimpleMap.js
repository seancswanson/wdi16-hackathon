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
    zoom: 13
  };

  render() {
    const allLocations =  this.props.shredlocations.map((shredLocation) => (
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