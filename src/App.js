import React from 'react';
import axios from 'axios';
import Cityform from './cityform.js';
import Location from './location.js';
import Weather from './weather.js';
import Movies from './movies.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      searchQuery: '',
      locationData: {},
      showMap: false,
      mapSrc: null,
      forecastData: [],
      errorAlert: false,
      movieData: [],
    };
  }

  getLocation = async () => {
    try {
      const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.searchQuery}&format=json`;
      const response = await axios.get(API);
      this.setState({
        locationData: response.data[0],
        showMap: true,
        mapSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${response.data[0].lat},${response.data[0].lon}&zoom=16&size=1000x1000`,
      });
    } catch (error) {
      console.log(error);
    }
  }

  getWeather = async () => {
    try {
      // const weatherQuery = `http://localhost:3333/weather?searchQuery=${this.state.searchQuery}`;
      const weatherQuery = `https://mc-city-explorer-api.herokuapp.com/weather?searchQuery=${this.state.searchQuery}`;
      const weatherResponse = await axios.get(weatherQuery);

      this.setState({
        forecastData: weatherResponse.data,
      });
    } catch(error) {
      console.log(error);
    }
  }

  getMovies = async () => {
    try {
      // const movieQuery = `http://localhost:3333/movies?searchQuery=${this.state.searchQuery}`;
      const movieQuery = `https://mc-city-explorer-api.herokuapp.com/movies?searchQuery=${this.state.searchQuery}`;
      const movieResponse = await axios.get(movieQuery);

      this.setState({
        movieData: movieResponse.data,
      });
    } catch(error) {
      console.log(error);
    }
  }

  updateCity = (e) => {
    this.setState({ searchQuery: e.target.value });
  }

  submitLocation = async () => {
    this.getLocation();
    this.getWeather();
    this.getMovies();
  }

  render() {
    return (
      <>
        <Cityform submitLocation={this.submitLocation} updateCity={this.updateCity} />
        {console.log(this.state.showMap)}
        <Location
          locationData={this.state.locationData}
          showMap={this.state.showMap}
          mapSrc={this.state.mapSrc}
        />
        {/* <p>Location: {this.state.location.display_name}</p>
        <p>Latitude: {this.state.location.lat}</p>
        <p>Longitude: {this.state.location.lon}</p>
        {this.state.showMap && <img alt="map" src={this.state.mapSrc} />} */}

        <Weather forecastData={this.state.forecastData} />
        <Movies movieData={this.state.movieData} />
      </>
    );
  }
}

export default App;
