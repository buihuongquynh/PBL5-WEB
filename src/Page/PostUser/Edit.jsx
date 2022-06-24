import {
  Button,
  Checkbox,
  Radio,
  DatePicker,
  Form,
  Input,
  InputNumber,
} from "antd";
import MainUser from "../../components/layout/MainUser";
import moment from "moment";
import { editUser } from "../../state/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
const EditUser = () => {
  const dateFormat = "YYYY-MM-DD";
  const history = useHistory();
  const [form] = Form.useForm();
  const newData = JSON.parse(localStorage.getItem("itemEdit"));
  newData && delete newData.date_of_birth;
  const dispath = useDispatch();
  const onFinish = (values) => {
    const dataAdd = {
      id: newData?.id,
    };
    const finalResult = Object.assign(values, dataAdd);
    finalResult.date_of_birth = finalResult.date_of_birth._i;
    dispath(editUser(finalResult));
    form.setFieldsValue(null);
    history.push("/users");
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
            span: 16,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="avatar"
            name="avt"
            rules={[
              {
                required: true,
                message: "Please input your avatar!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="birthday"
            name="date_of_birth"
            rules={[
              {
                required: true,
                message: "Please input your birthday!",
              },
            ]}
          >
            <DatePicker
              defaultValue={moment("2015-01-01", dateFormat)}
              format={dateFormat}
            />
          </Form.Item>
          <Form.Item label="Gender" name="gender">
            <Radio.Group>
              <Radio.Button value="1">male</Radio.Button>
              <Radio.Button value="0">female</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Phone" name="phone_number">
            <InputNumber />
          </Form.Item>
          <Form.Item
            label="address"
            name="address"
            rules={[
              {
                required: true,
                message: "Please input your role!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="role" name="role">
            <Radio.Group>
              <Radio.Button value="1">admin</Radio.Button>
              <Radio.Button value="0">user</Radio.Button>
            </Radio.Group>
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

export default EditUser;
