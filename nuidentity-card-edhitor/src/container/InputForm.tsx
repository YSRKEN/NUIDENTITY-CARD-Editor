import React, { FormEvent, useContext } from "react";
import { Form } from "react-bootstrap";
import { ApplicationContext } from "service/store";

const InputForm: React.FC = () => {
  const {
    nuiRegistration,
    nuiName,
    nuiDepot,
    nuiMastersName,
    nuiTwitterName,
    nuiMemo,
    backgroundType,
    dispatch
  } = useContext(ApplicationContext);

  const onChangeRegistration = (e: FormEvent<any>) => dispatch({ type: 'setNuiRegistration', message: e.currentTarget.value });
  const onChangeName = (e: FormEvent<any>) => dispatch({ type: 'setNuiName', message: e.currentTarget.value });
  const onChangeDepot = (e: FormEvent<any>) => dispatch({ type: 'setNuiDepot', message: e.currentTarget.value });
  const onChangeMastersName = (e: FormEvent<any>) => dispatch({ type: 'setNuiMastersName', message: e.currentTarget.value });
  const onChangeTwitterName = (e: FormEvent<any>) => dispatch({ type: 'setNuiTwitterName', message: e.currentTarget.value });
  const onChangeMemo = (e: FormEvent<any>) => dispatch({ type: 'setNuiMemo', message: e.currentTarget.value });
  const onChangeBackgroundImage = (e: FormEvent<any>) => dispatch({ type: 'setBackgroundType', message: e.currentTarget.value });

  return <Form>
    <Form.Group>
      <Form.Label>車体番号</Form.Label>
      <Form.Control value={nuiRegistration} onChange={onChangeRegistration} />
    </Form.Group>
    <Form.Group>
      <Form.Label>ぬいの名称</Form.Label>
      <Form.Control value={nuiName} onChange={onChangeName} />
    </Form.Group>
    <Form.Group>
      <Form.Label>車両基地名</Form.Label>
      <Form.Control value={nuiDepot} onChange={onChangeDepot} />
    </Form.Group>
    <Form.Group>
      <Form.Label>マスターの名称</Form.Label>
      <Form.Control value={nuiMastersName} onChange={onChangeMastersName} />
    </Form.Group>
    <Form.Group>
      <Form.Label>@スクリーンネーム</Form.Label>
      <Form.Control value={nuiTwitterName} onChange={onChangeTwitterName} />
    </Form.Group>
    <Form.Group>
      <Form.Label>メモ欄</Form.Label>
      <Form.Control value={nuiMemo} onChange={onChangeMemo} />
    </Form.Group>
    <Form.Group>
      <Form.Label>背景の種類</Form.Label>
      <Form.Control value={backgroundType} onChange={onChangeBackgroundImage} as="select">
        <option value="86">ハチロク</option>
        <option value="07">れいな</option>
      </Form.Control>
    </Form.Group>
  </Form>;
};

export default InputForm;
