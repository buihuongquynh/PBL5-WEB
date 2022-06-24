import {
  Button,
  Form,
  Input,
} from "antd";
import { addBrand } from "../../state/actions";
import { useDispatch } from "react-redux";
const PostUser = ({setIsModalVisible }) => {
  const dispath = useDispatch();
  const onFinish = (values) => {
    dispath(addBrand(values));
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
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input />
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
        <Input />
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
