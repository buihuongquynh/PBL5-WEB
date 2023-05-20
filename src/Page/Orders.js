import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Popconfirm,
  Button,
  Avatar,
  Modal,
  Typography,
} from "antd";
import { getOrder, deleteOrder } from "../state/actions";
import PostProduct from "./PostProduct";
import React, { useEffect, useState } from "react";
import Main from "../components/layout/Main";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, deleteProduct } from "../state/actions";
const { Title } = Typography;
const project = [
  {
    title: "NAME",
    dataIndex: "name",
    width: "32%",
  },
  {
    title: "PRICE",
    dataIndex: "price",
  },
  {
    title: "CUSTOMER",
    dataIndex: "customer",
  },
  {
    title: "ADDRESS",
    dataIndex: "address",
  },
  {
    title: "DISCOUNT",
    dataIndex: "discount",
  },
  {
    title: "ACTION",
    dataIndex: "action",
  },
];
function Products() {
  var dataproject = [];
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const orders = useSelector((state) => state.order.data);
  const confirm = (id) => {
    dispatch(deleteProduct(id));
  };
  const deletebtn = [
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z"
        fill="#111827"
        className="fill-danger"
      ></path>
    </svg>,
  ];
  const pencil = [
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={0}
    >
      <path
        d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
        className="fill-gray-7"
      ></path>
      <path
        d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
        className="fill-gray-7"
      ></path>
    </svg>,
  ];
  const onChange = (e) => dispatch(getProduct({ role: e.target.value }));
  orders?.forEach((element) => {
    dataproject.push({
      key: "1",
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              src={element.images}
              size={25}
              alt=""
            />
            <div className="avatar-info">
              <Title level={5}>{element.name}</Title>
            </div>
          </Avatar.Group>
        </>
      ),
      price: (
        <>
          <div className="semibold">{element.price} đ</div>
        </>
      ),
      customer: (
        <>
          <div className="text-sm">{element?.username}</div>
        </>
      ),
      address: (
        <>
          <div style={{ color: element.color }} className="text-sm">
            {element?.address}
          </div>
        </>
      ),
      discount: (
        <>
          <div className="text-sm">{element.discount} %</div>
        </>
      ),
      action: (
        <div style={{ alignItems: "center" }} className="col-action">
          <Popconfirm
            placement="left"
            title="are you sure?"
            onConfirm={() => confirm(element.id)}
            okText="Yes"
            cancelText="No"
          >
            <a className="mr-5">{deletebtn}</a>
          </Popconfirm>
          <Link
            className="darkbtn"
            to="/edit-product"
            onClick={() => handleEdit(element)}
          >
            {" "}
            {pencil}
          </Link>
        </div>
      ),
    });
  });

  const handleEdit = (element) => {};
  useEffect(() => {
    dispatch(getOrder({ all: true }));
  }, []);
  return (
    <Main>
      <div className="tabled">
        <div className="flex items-center justify-end mb-5">
          <Button onClick={() => showModal()}>Add New</Button>
        </div>
        <Modal
          title="Add New"
          footer={false}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <PostProduct setIsModalVisible={setIsModalVisible} />
        </Modal>
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Order Table"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="all">
                    <Radio.Button value="all">MAN</Radio.Button>
                    <Radio.Button value="online">WOMEN</Radio.Button>
                    <Radio.Button value="store">STORES</Radio.Button>
                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={project}
                  dataSource={dataproject}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Main>
  );
}
export default Products;
