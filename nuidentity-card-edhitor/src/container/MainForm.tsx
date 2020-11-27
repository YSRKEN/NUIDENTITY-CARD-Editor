import React from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
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
        <Tabs defaultActiveKey="option" id="main-tab" transition={false}>
          <Tab className="border-bottom border-left border-right p-3" eventKey="option" title="設定">
            <InputForm />
          </Tab>
          <Tab className="border-bottom border-left border-right p-3" eventKey="view" title="プレビュー">
            <CardView />
          </Tab>
        </Tabs>
      </Col>
    </Row>
  </Container>
);

export default MainForm;
