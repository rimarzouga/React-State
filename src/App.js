import React, { useState } from 'react';
import MovieCard from './Composant/MovieCard';
import MovieForm from './Composant/MovieForm';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <Container>
      <h1 className="my-4">Movie Collection</h1>
      <MovieForm onAddMovie={handleAddMovie} />
      <Row>
        {movies.map((movie, index) => (
          <Col key={index} md={4} className="mb-4">
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
