import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Alert } from 'react-bootstrap';
import './css/DisciplinesList.css'; // Импортируем стили
import defaultImage from './assets/default-image.jpg'; // Путь к изображению по умолчанию

const DisciplinesList = () => {
  const [disciplines, setDisciplines] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/v1/disciplines')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setDisciplines(data.disciplines))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <Alert variant="danger" className="my-4">Error: {error}</Alert>;
  }

  return (
    <Container fluid>
      {disciplines.map((discipline, index) => (
        <Row key={discipline.id} className="discipline-row my-4">
          <Col md={6} className={`discipline-image ${index % 2 === 0 ? 'order-md-1' : 'order-md-2'}`}>
            <Card.Img src={discipline.image_urls.length > 0 ? discipline.image_urls[0] : defaultImage} alt={discipline.name} className="img-fluid" />
          </Col>
          <Col md={6} className={`discipline-content d-flex align-items-center ${index % 2 === 0 ? 'order-md-2' : 'order-md-1'}`}>
            <Card className="w-100">
              <Card.Body>
                <Card.Title className="mb-3">{discipline.name}</Card.Title>
                <Card.Text>{discipline.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default DisciplinesList;