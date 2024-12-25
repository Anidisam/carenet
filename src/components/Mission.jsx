import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Mission = () => {
  return (
    <Container fluid className="py-5 bg-light text-center">
      {/* OUR MISSION */}
      <Row className="mb-4">
        <Col>
          <h2 className="fw-bold">OUR MISSION</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Our missions is to improve patient are comprehensive clinical
            information <br /> and resources essential to physicians and
            healthcare professionals.
          </p>
        </Col>
      </Row>

      {/* Space */}
      <div style={{ height: "40px" }}></div>

      {/* WHO WE ARE */}
      <Row>
        <Col>
          <h2 className="fw-bold">WHO WE ARE</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Medscape is the leading online global destination for physicians and{" "}
            <br />
            healthcare professionals worldwide, offering the latest medical news
            and <br />
            expert perspectives; essential point-of-care drug and disease
            information;
            <br /> and relevant professionals education and CME.
            <br />
            Medscape membership is free and gives you unlimited access to the
            entire <br /> network of sites and services.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Mission;
