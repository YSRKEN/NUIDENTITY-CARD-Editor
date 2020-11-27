import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import InputForm from "container/InputForm";
import CardView from "container/CardView";

const MainForm: React.FC = () => (
  <Container>
    <Row className="my-3">
      <Col className="text-center">
        <h1>ぬいぐるみ用名刺エディタ</h1>
      </Col>
    </Row>
    <Row className="my-3">
      <Col>
        <InputForm />
      </Col>
    </Row>
    <Row className="my-3">
      <Col>
        <CardView />
      </Col>
    </Row>
  </Container>
);

export default MainForm;
