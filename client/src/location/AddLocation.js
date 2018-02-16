import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
class AddLocation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      lat: '',
      lng: ''
    }
  }
  handleNameChange = (e) => {
    this.setState({name: e.target.value})
  }
  handleAddressChange = (e) => {
    this.setState({address: e.target.value})
  }
  handleLatChange = (e) => {
    this.setState({lat: e.target.value})
  }
  handleLngChange = (e) => {
    this.setState({lng: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/location/add', {
      name: this.state.name,
      address: this.state.address,
      lat: this.state.lat,
      lng: this.state.lng
    }).then(result => {
      this.props.updateLocation();
      this.props.history.push("/")
    }).catch(error => {
      console.log(error.response);
      this.props.setFlash('error', 'Failure message here');
    })
  }
  render() {
    let form = '';
    if(this.props.location){
      return (<Redirect to="/search" />);
    }
    else {
      form = (<form onSubmit={this.handleSubmit}>
                <div>
                  <input name="Name"
                       placeholder="What's your spots name?"
                       value={this.state.name}
                       onChange={this.handleNameChange}
                  />
                </div>
                <div>
                  <input name="Address"
                       placeholder="Address?"
                       value={this.state.address}
                       onChange={this.handleAddressChange} />
               </div>
               <div>
                  <input name="Lat"
                     placeholder="Lat?"
                     value={this.state.lat}
                     onChange={this.handleLatChange} />
                  <input name="Lng"
                     placeholder="Lng?"
                     value={this.state.lng}
                     onChange={this.handleLngChange} />                     
                 </div>
                 <input type="submit" value="Add Location" className="btn-primary" />
              </form>);
    }
    return (
      <div>
        {form}
{/*        {this.props.location ? <Redirect to="/search" /> : ''}*/}
      </div>
    );
  }
}
export default AddLocation;