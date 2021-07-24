import React from 'react';
import {Card} from 'react-bootstrap';

class Movies extends React.Component {
  render() {
    return (
      <div className="movies-list">
        {this.props.movieData.map( (value) =>
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
      </div>
    );
  }
}

export default Movies;
