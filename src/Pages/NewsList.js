import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Pagination } from "react-bootstrap";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/news?page=${pageNumber}`);
        setNews(response.data.news);
        setTotalPages(Math.ceil(response.data.count / 3)); // Assuming 3 news per page
      } catch (error) {
        console.error("Ошибка при получении новостей:", error);
      }
    };

    fetchNews();
  }, [pageNumber]);

  const handlePageChange = (newPage) => {
    setPageNumber(newPage);
  };

  return (
    <Container>
      <Row>
        {news.length > 0 && (
          <Col md={12}>
            <Card>
              <Card.Img variant="top" src={news[0].image_urls[0]} />
              <Card.Body>
                <Card.Title>{news[0].name}</Card.Title>
                <Card.Text>{news[0].description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
      <Row>
        {news.slice(1).map((item) => (
          <Col md={4} key={item.id}>
            <Card>
              {item.image_urls.length > 0 && <Card.Img variant="top" src={item.image_urls[0]} />}
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-3">
        <Col md={12}>
          <Pagination>
            <Pagination.Prev
              onClick={() => handlePageChange(pageNumber - 1)}
              disabled={pageNumber === 1}
            />
            {[...Array(totalPages).keys()].map((num) => (
              <Pagination.Item
                key={num + 1}
                active={num + 1 === pageNumber}
                onClick={() => handlePageChange(num + 1)}
              >
                {num + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => handlePageChange(pageNumber + 1)}
              disabled={pageNumber === totalPages}
            />
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsList;