import React, { FormEvent, useContext } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Image, Layer, Stage } from "react-konva";
import { ApplicationContext } from "service/store";
import card86 from 'asset/nuid_temple_86.png';
import card07 from 'asset/nuid_temple_07.png';
import useImage from "use-image";

const MainForm: React.FC = () => {
  const { backgroundType, dispatch } = useContext(ApplicationContext);

  const [image86] = useImage(card86);
  const [image07] = useImage(card07);

  const imageData = backgroundType === '86' ? image86 : image07;

  const onChangeBackgroundImage = (e: FormEvent<any>) => dispatch({ type: 'setBackgroundType', message: e.currentTarget.value });

  return (
    <Container>
      <Row className="my-3">
        <Col className="text-center">
          <h1>ぬいぐるみ用名刺エディタ</h1>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>背景の種類</Form.Label>
              <Form.Control value={backgroundType} onChange={onChangeBackgroundImage} as="select">
                <option value="86">ハチロク</option>
                <option value="07">れいな</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <Stage width={1076} height={650} className="mx-auto">
            <Layer>
              <Image image={imageData} x={0} y={0} width={1076} height={650} />
            </Layer>
          </Stage>
        </Col>
      </Row>
    </Container>
  );
};

export default MainForm;
