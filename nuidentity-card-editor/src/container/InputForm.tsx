import TextForm from "component/TextForm";
import React, { FormEvent, useContext } from "react";
import { Form } from "react-bootstrap";
import { ApplicationContext } from "service/store";
import { resizeImage } from "service/utility";

const InputForm: React.FC = () => {
  const {
    nuiRegistration,
    nuiName,
    nuiDepot,
    nuiMastersName,
    nuiTwitterName,
    nuiMemo,
    backgroundType,
    resizerType,
    dispatch
  } = useContext(ApplicationContext);

  const onChangeBackgroundImage = (e: FormEvent<any>) => dispatch({ type: 'setBackgroundType', message: e.currentTarget.value });
  const onChangeResizerType = (e: FormEvent<any>) => dispatch({ type: 'setResizerType', message: e.currentTarget.value });

  const onChangeNuiImage = async (e: FormEvent<any>) => {
    const readImageData = (): Promise<string> => {
      return new Promise((res) => {
        const fileList: FileList = (e.target as any).files;
        const reader = new FileReader();
        reader.onload = () => {
          const dataUrl = reader.result;
          if (dataUrl !== null) {
            res(dataUrl as string);
          } else {
            res('');
          }
        };
        if (fileList.length >= 1) {
          reader.readAsDataURL(fileList[0]);
        } else {
          res('');
        }
      });
    };
    const dataUrl = await readImageData();
    const dataUrl2 = await resizeImage(dataUrl, resizerType);
    dispatch({ type: 'setNuiImage', message: dataUrl2 });
  };

  return <Form>
    <TextForm label="車体番号" value={nuiRegistration} dataKey="NuiRegistration" dataKey2="registration" />
    <TextForm label="ぬいの名称" value={nuiName} dataKey="NuiName" dataKey2="name" />
    <TextForm label="車両基地名" value={nuiDepot} dataKey="NuiDepot" dataKey2="depot" />
    <TextForm label="マスターの名称" value={nuiMastersName} dataKey="NuiMastersName" dataKey2="mastersName" />
    <TextForm label="@スクリーンネーム" value={nuiTwitterName} dataKey="NuiTwitterName" dataKey2="twitterName" />
    <TextForm label="メモ欄" value={nuiMemo} dataKey="NuiMemo" dataKey2="memo" />
    <Form.Group>
      <Form.Label>背景の種類</Form.Label>
      <Form.Control value={backgroundType} onChange={onChangeBackgroundImage} as="select">
        <option value="86">ハチロク</option>
        <option value="07">れいな</option>
        <option value="12">すずしろ</option>
      </Form.Control>
    </Form.Group>
    <Form.Group>
      <Form.Label>読み込み時の画像のリサイズ方法</Form.Label>
      <Form.Control value={resizerType} onChange={onChangeResizerType} as="select">
        <option value="force">縦横比を無視して縦・横を合わせる</option>
        <option value="width">横の幅を合わせる</option>
        <option value="height">縦の幅を合わせる</option>
        <option value="inside">枠に対して内接するように合わせる</option>
        <option value="outside">枠に対して外接するように合わせる</option>
      </Form.Control>
    </Form.Group>
    <Form.Group>
      <Form.File label="画像ファイルを指定" onChange={onChangeNuiImage} />
    </Form.Group>
  </Form>;
};

export default InputForm;
