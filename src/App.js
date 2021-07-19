import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      searchQuery: '',
      location: {}
    };
  }

  getLocation = async () => {
    console.log('Button Works!');
    const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_API_KEY}&q=${this.state.searchQuery}&format=json`;
    const response = await axios.get(API);

    this.setState({ location: response.data[0] });
    console.log('LOCATION IQ DATA:', this.state.location);

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
      </>
    );
  }
}

export default App;
