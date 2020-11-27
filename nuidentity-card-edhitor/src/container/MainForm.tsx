import React, { FormEvent, useContext } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Image, Layer, Stage, Text } from "react-konva";
import { ApplicationContext } from "service/store";
import card86 from 'asset/nuid_temple_86.png';
import card07 from 'asset/nuid_temple_07.png';
import useImage from "use-image";

const MainForm: React.FC = () => {
  const { nuiRegistration, backgroundType, dispatch } = useContext(ApplicationContext);

  const [image86] = useImage(card86);
  const [image07] = useImage(card07);

  const imageData = backgroundType === '86' ? image86 : image07;

  const onChangeRegistration = (e: FormEvent<any>) => dispatch({ type: 'setNuiRegistration', message: e.currentTarget.value });
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
              <Form.Label>車体番号</Form.Label>
              <Form.Control value={nuiRegistration} onChange={onChangeRegistration} />
            </Form.Group>
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
              <Text text={nuiRegistration} fontSize={48} x={40} y={130} fontStyle="bold" />
              <Text text="ぬいの名称" fontSize={32} x={40} y={260} fontStyle="bold" />
              <Text text="車両基地名" fontSize={32} x={340} y={260} fontStyle="bold" />
              <Text text="マスターの名称" fontSize={32} x={40} y={360} fontStyle="bold" />
              <Text text="@screen_name" fontSize={32} x={340} y={360} fontStyle="bold" />
              <Text text="ここはメモ欄です" fontSize={32} x={40} y={460} fontStyle="bold" />
            </Layer>
          </Stage>
        </Col>
      </Row>
    </Container>
  );
};

export default MainForm;
