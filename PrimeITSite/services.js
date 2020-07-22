import React from "react";
import { Card, Container, CardColumns, Row, Col } from "react-bootstrap";

export const Services = () => {
  return (
    <CardColumns>
      <Col>
        <h1>Services</h1>
      </Col>
      <Card>
        <Card.Body>
          <Card.Title>Designing</Card.Title>
          <Card.Text>
            This is an amazing set of animated accordions based completely on
            CSS. They come oriented both vertically and horizontally in order to
            fit properly in your project. In order to see the slides,
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Developing</Card.Title>
          <Card.Text>
            This is an amazing set of animated accordions based completely on
            CSS. They come oriented both vertically and horizontally in order to
            fit properly in your project. In order to see the slides,
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Marketing</Card.Title>
          <Card.Text>
            This is an amazing set of animated accordions based completely on
            CSS. They come oriented both vertically and horizontally in order to
            fit properly in your project. In order to see the slides,
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Formações</Card.Title>
          <Card.Text>
            Prestamos formações a nossos profissionais junto com nosso parceiro
            People & Skills{" "}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Analytics</Card.Title>
          <Card.Text>
            This is an amazing set of animated accordions based completely on
            CSS. They come oriented both vertically and horizontally in order to
            fit properly in your project. In order to see the slides,
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>MobileApps</Card.Title>
          <Card.Text>Desenvolvemos soluções para todo o mercado. </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>OutSource</Card.Title>
          <Card.Text>
            Compartilhamos nossos profissionais especializados com nossos
            clientes.{" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </CardColumns>
  );
};
