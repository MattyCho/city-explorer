import React from 'react';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';

class Cityform extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitLocation();
  }

  render() {
    return (
      <div className="city-form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Enter location" onChange={this.props.updateCity}/>
          </Form.Group>
          <Button onClick={this.handleSubmit}>Explore!</Button>
        </Form>
      </div>
    );
  }
}

export default Cityform;
