/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getMan, getInfo } from "../../state/actions";
import { useParams } from "react-router-dom";
import Item from "../../components/item";
import ProductInfo from "./product-info"
import { Table, Tag, Spin } from 'antd';

function Look() {
  const param = useParams();
  const dispatch = useDispatch();
  const listInfo = useSelector((state) => state.getInfo.data);
  const [dataIf, setDataIf] = useState(null);
  useEffect(() => {
    dispatch(getInfo());
  }, [dispatch]);
  const result = listInfo && listInfo.filter((item) => item.phone_number.includes(param.id));
  const columns = [
    {
      title: 'img',
      dataIndex: 'img',
      key: 'img',
      render: text => <img src={text} alt="" />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'giá tiền',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Trạng thái',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          <Tag color="green">
            Đang giao
          </Tag>

        </>
      ),
    },
  ];
  console.log(result && result[0], "result && result[0]")
  return (
    result ? (
      <div className="productLookUP">
        {
          result.length > 0 ?
            <div className="row">
              <div className="col-md-6">
                <div className="info">
                  <div className="if__center">
                    <pre>Họ tên:      {result && result[0].fullname}</pre>
                    <pre>Email:       {result && result[0].email}</pre>
                    <pre>Địa chỉ:     {result && result[0].address}</pre>
                    <pre>SDT:         {result && result[0].phone_number}</pre>
                  </div>

                </div>
              </div>
              <div className="col-md-5">
                <div className="pro">
                  <Table
                    pagination={false}
                    columns={columns}
                    dataSource={result && result[0].id_product} />
                </div>
              </div>
            </div>
            :
            <div className="productLookUP">
              <div className="null">không có user nào khớp với số điện thoại</div>
            </div>
        }

      </div>)
      : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            paddingTop:'200px'
          }}
          className="spin"
        >
          <Spin />
        </div>)

  );
}
export default Look;
