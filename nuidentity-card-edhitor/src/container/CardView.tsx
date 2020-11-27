import React, { useContext } from "react";
import { Image, Layer, Stage, Text } from "react-konva";
import { ApplicationContext } from "service/store";
import useImage from "use-image";
import card86 from 'asset/nuid_temple_86.png';
import card07 from 'asset/nuid_temple_07.png';
import { MESSAGE_WIDTH } from "constant/other";

const CardView: React.FC = () => {
  const {
    nuiRegistration,
    nuiName,
    nuiDepot,
    nuiMastersName,
    nuiTwitterName,
    nuiMemo,
    backgroundType,
  } = useContext(ApplicationContext);

  const [image86] = useImage(card86);
  const [image07] = useImage(card07);

  const imageData = backgroundType === '86' ? image86 : image07;

  // JavaScriptで、表示サイズを決定
  const clientWidth = document.body.clientWidth * 0.7;
  const width = Math.min(clientWidth, MESSAGE_WIDTH);
  const scale = 1.0 * width / MESSAGE_WIDTH;

  return <Stage scale={{ x: scale, y: scale }} width={MESSAGE_WIDTH} height={650} className="mx-auto">
    <Layer>
      <Image image={imageData} x={0} y={0} width={1076} height={650} />
      <Text text={nuiRegistration} fontSize={48} x={40} y={130} fontStyle="bold" />
      <Text text={nuiName} fontSize={32} x={40} y={260} fontStyle="bold" />
      <Text text={nuiDepot} fontSize={32} x={340} y={260} fontStyle="bold" />
      <Text text={nuiMastersName} fontSize={32} x={40} y={360} fontStyle="bold" />
      <Text text={nuiTwitterName} fontSize={32} x={340} y={360} fontStyle="bold" />
      <Text text={nuiMemo} fontSize={32} x={40} y={460} fontStyle="bold" />
    </Layer>
  </Stage>;
};

export default CardView;
