import React from 'react';

class Weather extends React.Component {
  render() {
    return (
      <div className="forecast-list">
        {this.props.forecastData.map( (value) =>
          <>
            <p>Date: {value.date}</p>
            <p>Description: {value.description}</p>
          </>
        )}
      </div>
    );
  }
}

export default Weather;
