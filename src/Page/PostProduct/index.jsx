import { Button, Radio, Form, Input, Select, InputNumber } from "antd";
import { addProduct, getBrand } from "../../state/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const PostProduct = ({ setIsModalVisible }) => {
  const dispath = useDispatch();
  const onFinish = (values) => {
    dispath(addProduct(values));
    setIsModalVisible(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const brands = useSelector((state) => state.brand.data);
  console.log(brands, "brand");
  useEffect(() => {
    dispath(getBrand());
  }, []);
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
        name="images"
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
      <Form.Item label="Category" name="material">
        <Radio.Group>
          <Radio.Button value="Man">Man</Radio.Button>
          <Radio.Button value="Women">Women</Radio.Button>
          <Radio.Button value="Jewels">Jewels</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Color" name="color">
        <Radio.Group>
          <Radio.Button value="red">red</Radio.Button>
          <Radio.Button value="black">black</Radio.Button>
          <Radio.Button value="white">white</Radio.Button>
          <Radio.Button value="yellow">yellow</Radio.Button>
          <Radio.Button value="pink">pink</Radio.Button>
          <Radio.Button value="gray">gray</Radio.Button>
          <Radio.Button value="green">green</Radio.Button>
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
        <Button onClick={() => handleCancel()}>Cancel</Button>
      </Form.Item>
    </Form>
  );
};

export default PostProduct;
