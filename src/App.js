import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      searchQuery: '',
      location: {},
      showMap: false,
      mapSrc: null,
      forecastData: []
    };
  }

  getLocation = async (e) => {
    e.preventDefault();
    console.log('Button Works!');
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${this.state.searchQuery}&format=json`;
    const response = await axios.get(API);

    const query = `http://localhost:3333/weather?searchQuery=${this.state.searchQuery}`;
    const weatherResponse = await axios.get(query);

    this.setState({
      location: response.data[0],
      showMap: true,
      mapSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${response.data[0].lat},${response.data[0].lon}&zoom=16&size=1000x1000`,
      forecastData: weatherResponse.data,
    });
    console.log(this.state.forecastData);
  }

  render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Enter location" onChange={(e) => this.setState({ searchQuery: e.target.value })}/>
          </Form.Group>
          <Button onClick={this.getLocation}>Explore!</Button>
        </Form>

        <p>Location: {this.state.location.display_name}</p>
        <p>Latitude: {this.state.location.lat}</p>
        <p>Longitude: {this.state.location.lon}</p>
        {this.state.showMap && <img alt="map" src={this.state.mapSrc} />}
        {this.state.forecastData.map( (value) =>
          <>
            <p>Date: {value.date}</p>
            <p>Description: {value.description}</p>
          </>
        )};
      </>
    );
  }
}

export default App;
