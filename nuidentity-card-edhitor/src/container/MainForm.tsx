import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Image, Layer, Stage } from "react-konva";
import { ApplicationContext } from "service/store";
import card86 from 'asset/nuid_temple_86.png';
import useImage from "use-image";

const MainForm: React.FC = () => {
  const { dispatch } = useContext(ApplicationContext);

  const [imageData] = useImage(card86);

  return (
    <Container>
      <Row className="my-3">
        <Col className="text-center">
          <h1 onClick={() => dispatch({ type: '' })}>ぬいぐるみ用名刺エディタ</h1>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <Stage width={1076} height={650}>
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
