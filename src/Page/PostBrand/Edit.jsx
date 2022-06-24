import { Button, Form, Input } from "antd";
import MainUser from "../../components/layout/MainUser";
import { editBrand } from "../../state/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
const EditBrand = () => {
  const history = useHistory();
  const [form] = Form.useForm();
  const newData = JSON.parse(localStorage.getItem("brandEdit"));
  const dispath = useDispatch();
  const onFinish = (values) => {
    const dataAdd = {
      id: newData?.id,
    };
    const finalResult = Object.assign(values, dataAdd);
    dispath(editBrand(finalResult));
    form.setFieldsValue(null);
    history.push("/brands");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    form.setFieldsValue(newData);
  }, []);
  return (
    <MainUser>
      <div style={{ paddingTop: "100px" }}>
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 8,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input  width={300}/>
          </Form.Item>
          <Form.Item
            label="Origin"
            name="origin"
            rules={[
              {
                required: true,
                message: "Please input your brand!",
              },
            ]}
          >
            <Input width={300}/>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </MainUser>
  );
};

export default EditBrand;
