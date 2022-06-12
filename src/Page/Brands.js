
import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Upload,
  Popconfirm,
  Button,
  message,
  Progress,
  Avatar,
  Modal,
  Typography,
} from "antd";
import { ToTopOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import Main from "../components/layout/Main";
import { useDispatch, useSelector } from "react-redux";
import { getBrand, deleteBrand } from "../state/actions";
const { Title } = Typography;
const formProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
const project = [
  {
    title: "NAME",
    dataIndex: "name",
    width: "32%",
  },
  {
    title: "ORIGIN",
    dataIndex: "origin",
  },
  {
    title: "ACTION",
    dataIndex: "action",
  },
];
function Brands() {
  var dataproject = [];
  const dispatch = useDispatch();
  const products = useSelector((state) => state.brand.data);
  const confirm = (id) => {
    dispatch(deleteBrand(id));
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
  const onChange = (e) => dispatch(getBrand({ role: e.target.value }));
  products?.forEach((element) => {
    dataproject.push({
      key: "1",
      name: (
        <>
          <div className="semibold">{element.name}</div>
        </>
      ),
      origin: (
        <>
          <div className="semibold">{element.origin}</div>
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
          <a type="link" className="darkbtn">
            {pencil}
          </a>
        </div>
      ),
    });
  });

  const handleEdit = (id) => {
    console.log(id);
  };
  useEffect(() => {
    dispatch(getBrand());
  }, []);
  return (
    <Main>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Projects Table"
              extra={
                <>
                  <Radio.Group onChange={onChange} defaultValue="all">
                    <Radio.Button value="all">All</Radio.Button>
                    <Radio.Button value="online">ONLINE</Radio.Button>
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
              <div className="uploadfile pb-15 shadow-none">
                <Upload {...formProps}>
                  <Button
                    type="dashed"
                    className="ant-full-box"
                    icon={<ToTopOutlined />}
                  >
                    Click to add
                  </Button>
                </Upload>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </Main>
  );
}
export default Brands;
