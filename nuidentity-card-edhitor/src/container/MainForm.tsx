import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ApplicationContext } from "service/store";

const MainForm: React.FC = () => {
  const { dispatch } = useContext(ApplicationContext);

  return (
    <Container>
      <Row className="my-3">
        <Col className="text-center">
          <h1 onClick={() => dispatch({ type: '' })}>ぬいぐるみ用名刺エディタ</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default MainForm;
