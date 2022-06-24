import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Popconfirm,
  Button,
  Modal,
  Avatar,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { Redirect, Link } from "react-router-dom";
import Main from "../components/layout/Main";
import { useDispatch, useSelector } from "react-redux";
import { getUser, deleteUser } from "../state/actions";
import PostUser from "./PostUser";
import EditUser from "./PostUser/Edit"
const { Title } = Typography;
const columns = [
  {
    title: "NAME",
    dataIndex: "name",
    key: "name",
    width: "32%",
  },
  {
    title: "ADDRESS",
    dataIndex: "function",
    key: "function",
  },

  {
    title: "ROLE",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "BIRTHDAY",
    key: "employed",
    dataIndex: "employed",
  },
];
function Users() {
  var data = [];
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
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.data);
  const confirm = (id) => {
    dispatch(deleteUser(id));
  };
  const handleEdit = (element)=>{
    localStorage.setItem("itemEdit",JSON.stringify(element))
  }
  const onChange = (e) => dispatch(getUser({ role: e.target.value }));
  users?.forEach((element) => {
    data.push({
      key: element.id,
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={element.avt}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>{element.name}</Title>
              <p>{element.email}</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      function: (
        <>
          <div className="author-info">
            <Title level={5}>{element.address}</Title>
            <p>{element.phone_number}</p>
          </div>
        </>
      ),

      status: (
        <>
          <Button type="primary" className="tag-primary">
            {element.role ? "EMPLOYEE" : "CLIENT"}
          </Button>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <span>{element.date_of_birth}</span>
            <Link to="/edit-user" onClick={() =>handleEdit(element)}>Edit</Link>
            <Popconfirm
              placement="left"
              title="are you sure?"
              onConfirm={() => (confirm(element.id))}
              okText="Yes"
              cancelText="No"
            >
              <a>Delete</a>
            </Popconfirm>
          </div>
        </>
      ),
    });
  });

  useEffect(() => {
    dispatch(getUser({ role: "all" }));
  }, []);
  return (
    <Main>
      <div className="tabled">
        {/* <div className="flex items-center justify-end mb-5">
          <Button onClick={() => showModal(null)}>Add New</Button>
        </div> */}
        <Modal
          title="Add New"
          footer={false}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <PostUser setIsModalVisible={setIsModalVisible}  />
        </Modal>
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-5"
              title="USERS TABLE"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="0">
                    <Radio.Button value="0">CLIENT</Radio.Button>
                    <Radio.Button value="1">EMPLOYEE</Radio.Button>
                  </Radio.Group>
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={data}
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

export default Users;
