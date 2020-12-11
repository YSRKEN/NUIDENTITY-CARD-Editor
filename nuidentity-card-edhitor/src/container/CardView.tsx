import React, { useContext, useRef } from "react";
import { Image, Layer, Rect, Stage, Text } from "react-konva";
import { ApplicationContext } from "service/store";
import useImage from "use-image";
import card86 from 'asset/nuid_temple_86.png';
import card07 from 'asset/nuid_temple_07.png';
import card12 from 'asset/nuid_temple_12.png';
import { IMAGE_HEIGHT, IMAGE_WIDTH, MESSAGE_HEIGHT, MESSAGE_WIDTH } from "constant/other";
import { Button, Form } from "react-bootstrap";
import { Stage as StageType } from 'konva/types/Stage';

const CardView: React.FC = () => {
  const {
    nuiRegistration,
    nuiName,
    nuiDepot,
    nuiMastersName,
    nuiTwitterName,
    nuiMemo,
    nuiImage,
    backgroundType,
    fontOption,
  } = useContext(ApplicationContext);

  const [image86] = useImage(card86);
  const [image07] = useImage(card07);
  const [image12] = useImage(card12);
  const [nuiImageData] = useImage(nuiImage);
  const stageRef = useRef<StageType>(null);

  const imageData = backgroundType === '86' ? image86 : backgroundType === '07' ? image07 : image12;

  // JavaScriptで、表示サイズを決定
  const clientWidth = document.body.clientWidth * 0.7;
  const width = Math.min(clientWidth, MESSAGE_WIDTH);
  const scale = 1.0 * width / MESSAGE_WIDTH;
  console.log(`scale : ${scale}`);

  const save = () => {
    const temp = stageRef.current;
    if (temp !== null) {
      const dataUrl = temp.toDataURL({
        pixelRatio: 1.0 / scale
      });
      const link = document.createElement('a');
      link.download = 'nui-card.png';
      link.href = dataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return <>
    <Form className="mb-3">
      <Form.Group className="d-none d-sm-inline">
        <Button className="mr-3" onClick={save}>保存</Button>
      </Form.Group>
    </Form>
    <Stage ref={stageRef} scale={{ x: scale, y: scale }} width={MESSAGE_WIDTH * scale} height={MESSAGE_HEIGHT * scale} className="mx-auto"
      onClick={save} onTap={save}>
      <Layer>
        <Rect fill='white' x={719} y={138} width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />
        <Image image={nuiImageData} x={719} y={138} width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />
        <Image image={imageData} x={0} y={0} width={1076} height={650} />
        <Text text={nuiRegistration} fontSize={48} x={40} y={130}
          fontStyle={fontOption.registration.boldFlg ? 'bold' : undefined} />
        <Text text={nuiName} fontSize={32} x={40} y={260}
          fontStyle={fontOption.name.boldFlg ? 'bold' : undefined} />
        <Text text={nuiDepot} fontSize={32} x={340} y={260}
          fontStyle={fontOption.depot.boldFlg ? 'bold' : undefined} />
        <Text text={nuiMastersName} fontSize={32} x={40} y={360}
          fontStyle={fontOption.mastersName.boldFlg ? 'bold' : undefined} />
        <Text text={nuiTwitterName} fontSize={32} x={340} y={360}
          fontStyle={fontOption.twitterName.boldFlg ? 'bold' : undefined} />
        <Text text={nuiMemo} fontSize={32} x={40} y={460}
          fontStyle={fontOption.memo.boldFlg ? 'bold' : undefined} />
      </Layer>
    </Stage>
  </>;
};

export default CardView;
