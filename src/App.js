import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import {Button, Card} from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      searchQuery: '',
      location: {},
      showMap: false,
      mapSrc: null,
      forecastData: [],
      errorAlert: false,
      movieData: [],
    };
  }

  getLocation = async (e) => {
    e.preventDefault();
    try {
      const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.searchQuery}&format=json`;
      const response = await axios.get(API);
      const weatherQuery = `http://localhost:3333/weather?searchQuery=${this.state.searchQuery}`;
      const weatherResponse = await axios.get(weatherQuery);

      console.log('before');
      const movieQuery = `http://localhost:3333/movies?searchQuery=${this.state.searchQuery}`;
      console.log('middle');
      const movieResponse = await axios.get(movieQuery);
      console.log('after');

      this.setState({
        location: response.data[0],
        showMap: true,
        mapSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${response.data[0].lat},${response.data[0].lon}&zoom=16&size=1000x1000`,
        forecastData: weatherResponse.data,
        movieData: movieResponse.data,
      });
    } catch (error) {
      console.log(error.response.status);
      this.setState({
        errors: error.response.status,
        errorAlert: true});
    }
    console.log(this.state.movieData);
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
        )}

        {this.state.movieData.map( (value) =>
          <>
            <Card style={{width:'50%'}}>
              <img src={value.image_URL}></img>
              <Card.Title>{value.title}</Card.Title>
              <Card.Body>
                <p>Release Date: {value.releasedOn}</p>
                <p>Popularity: {value.popularity}</p>
                <p>Overview: {value.overview}</p>
                <p>Average Votes: {value.avgVotes}</p>
                <p>Totale Votes: {value.totalVotes}</p>
              </Card.Body>
            </Card>
          </>
        )}

      </>
    );
  }
}

export default App;
