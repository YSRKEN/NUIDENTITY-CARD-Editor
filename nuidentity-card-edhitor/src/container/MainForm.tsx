import React from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import InputForm from "container/InputForm";
import CardView from "container/CardView";

const MainForm: React.FC = () => (
  <Container>
    <Row className="my-3">
      <Col className="text-center">
        <h1 className="d-none d-sm-inline">ぬいぐるみ用名刺エディタ</h1>
        <h4 className="d-inline d-sm-none">ぬいぐるみ用名刺エディタ</h4>
      </Col>
    </Row>
    <Row className="my-3">
      <Col className="text-center">
        <span className="d-inline-block mr-3">Ver.1.2.0</span>
        <span className="d-inline-block mr-3"><a href="https://github.com/YSRKEN/NUIDENTITY-CARD-Editor" rel="noreferrer" target="_blank">GitHub</a></span>
        <span className="d-inline-block mr-3"><a href="https://twitter.com/sin_kou_hyou/status/985448725026762752" rel="noreferrer" target="_blank">背景テンプレ画像の出典</a></span>
        <span><a href="https://twitter.com/YSRKEN" rel="noreferrer" target="_blank">ツール作者のTwitter</a></span>
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
