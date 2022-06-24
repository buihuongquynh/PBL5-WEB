import {
  Button,
  Radio,
  Form,
  Input,
  Select,
  InputNumber,
} from "antd";
import MainUser from "../../components/layout/MainUser";
import { Link, useHistory } from "react-router-dom";
import { editProduct, getBrand } from "../../state/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const EditProduct = () => {
  const history = useHistory();
  const [form] = Form.useForm();
  const newData = JSON.parse(localStorage.getItem("productEdit"));
  const dispath = useDispatch();
  const onFinish = (values) => {
    const dataAdd = {
      id: newData?.id,
    };
    const finalResult = Object.assign(values, dataAdd);
    dispath(editProduct(finalResult));
    form.setFieldsValue(null);
    history.push("/products");
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const brands = useSelector((state) => state.brand.data);
  useEffect(() => {
    dispath(getBrand());
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
        label="name"
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
        label="Image"
        name="image"
        rules={[
          {
            required: true,
            message: "Please input your image!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Price" name="price">
      <Input />
      </Form.Item>
      <Form.Item label="Discout" name="discount">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Size" name="size">
        <Radio.Group>
          <Radio.Button value="35">35</Radio.Button>
          <Radio.Button value="36">36</Radio.Button>
          <Radio.Button value="37">37</Radio.Button>
          <Radio.Button value="38">38</Radio.Button>
          <Radio.Button value="39">39</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Category" name="category">
        <Radio.Group>
          <Radio.Button value="1">man</Radio.Button>
          <Radio.Button value="0">women</Radio.Button>
          <Radio.Button value="1">jewels</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Color" name="color">
        <Radio.Group>
          <Radio.Button value="1">red</Radio.Button>
          <Radio.Button value="0">black</Radio.Button>
          <Radio.Button value="1">white</Radio.Button>
          <Radio.Button value="1">yellow</Radio.Button>
          <Radio.Button value="1">pink</Radio.Button>
          <Radio.Button value="1">gray</Radio.Button>
          <Radio.Button value="1">green</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Brand" name="brand_id">
        <Select>
          {brands?.map((item) => (
            <Select.Option value={item.id}>{item.name}</Select.Option>
          ))}
        </Select>
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

export default EditProduct;
