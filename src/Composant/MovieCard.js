import React from 'react';
import { Card, Button } from 'react-bootstrap';

function MovieCard({ movie }) {
  return (
    <Card>
      <Card.Img variant="top" src={movie.imageUrl} alt={movie.title} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Button variant="primary" onClick={() => alert(`You clicked on ${movie.title}`)}>More Info</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
