import { ActionType } from "constant/other";
import { FormEvent, useContext } from "react";
import { Form } from "react-bootstrap";
import { ApplicationContext } from "service/store";

const TextForm: React.FC<{
  label: string;
  value: string;
  dataKey: string;
}> = ({ label, value, dataKey }) => {
  const { dispatch } = useContext(ApplicationContext);

  const onChange = (e: FormEvent<any>) => dispatch({ type: ('set' + dataKey) as ActionType, message: e.currentTarget.value });

  return <Form.Group>
    <Form.Label>{label}</Form.Label>
    <Form.Control value={value} onChange={onChange} />
  </Form.Group>;
};

export default TextForm;
