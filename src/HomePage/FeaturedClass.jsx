import React from 'react';
import { Button } from '@mui/material';
import Card from 'react-bootstrap/Card';
// Import CSS file for styles

function FeaturedClass(props) {
  return (
    <div className="featured-class-container">
      <Card className="featured-card">
        <Card.Img variant="top" src={props.src} className="card-image" />
        <Card.Body className="card-body">
          <Card.Title>{props.title}</Card.Title> 
          <Card.Text style={{fontSize:"0.95rem"}}>{props.content}</Card.Text>
          <Button variant="contained" color="secondary">
            Go to Course
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FeaturedClass;
