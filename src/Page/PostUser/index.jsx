import {
  Button,
  Checkbox,
  Radio,
  DatePicker,
  Form,
  Input,
  InputNumber,
} from "antd";
import moment from "moment";
import { addUser } from "../../state/actions";
import { useDispatch } from "react-redux";
import {useEffect} from "react"
const PostUser = ({setIsModalVisible }) => {
  const dateFormat = "YYYY-MM-DD";
  const dispath = useDispatch();
  const onFinish = (values) => {
    const dataAdd = {
      password: "123456",
      avt: "https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FBackground-7.f9fb90f8.jpg&w=384&q=100",
    };
    const finalResult = Object.assign(values, dataAdd);
    finalResult.date_of_birth = finalResult.date_of_birth._i;
    dispath(addUser(finalResult));
    setIsModalVisible(false)
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleCancel = ()=>{
    setIsModalVisible(false)
  }
  return (
    <Form
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
        <Button onClick={()=>handleCancel()}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PostUser;
