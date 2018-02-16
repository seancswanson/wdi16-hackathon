import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
class ShowLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    };
  }
  componentDidMount() {
    axios.get('/location/show') //what is wrong with this?
      .then(res => { //good
        // let example = [];
        // example.push(res.data);
        console.log(res.data);
        this.setState({ locations: res.data }); //good
        console.log(this.state.locations); //doesn't console log correctly
      });
  }
  // componentDidMount() {
  //   axios.get('/api/book')
  //     .then(res => {
  //       this.setState({ books: res.data });
  //       console.log(this.state.books);
  //     });
  // }
  render() {
    return(
      <div>
        <h1>Show Locations</h1>
        <table class="table table-stripe">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Lat</th>
              <th>Lng</th>
            </tr>
          </thead>
          <tbody>
            {this.state.locations.map(location => 
              <tr>
                <td>{location.name}</td>
                <td>{location.address}</td>
                <td>{location.lat}</td>
                <td>{location.lng}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ShowLocation;