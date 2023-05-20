import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { Avatar, List, Space, Input, Rate } from "antd";
import { getDetail, getComment, addComment } from "../../state/actions";
import { useParams } from "react-router-dom";
import { addCart } from "../../state/actions";
import MainUser from "../../components/layout/MainUser";
import "./style.css";
import { useHistory } from "react-router-dom";
import {
  StarOutlined,
  LikeOutlined,
  MessageOutlined,
  SendOutlined,
} from "@ant-design/icons";
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
function Detail() {
  const param = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const dataDetail = useSelector((state) => state.getDetail.data);
  const comments = useSelector((state) => state.comment.data);
  const [rate, setValue] = useState(3);
  const [cmt, setCmt] = useState("");
  const userDetais = JSON.parse(localStorage.getItem("info"));
  const handleSend = () => {
    const data = {
      product_id: param.id,
      user_id: userDetais?.id,
      cmt: cmt,
      rate: rate,
    };
    dispatch(addComment(data));
    console.log(data, "dataaaaa");
  };
  useEffect(() => {
    dispatch(getDetail(param.id));
    dispatch(getComment({ product_id: param.id }));
  }, []);
  const handleAddcart = () => {
    dispatch(addCart(dataDetail));
  };
  return (
    <MainUser>
      <div className="Detail">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <img src={dataDetail ? dataDetail.images : null} alt="" />
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="name">{dataDetail ? dataDetail.name : null}</div>
              <div className="price mb-4">
                <p className="order">
                  Price: {dataDetail ? dataDetail.price : null}$
                </p>
                <strike letter className="old ml-1">
                  {dataDetail ? dataDetail.oldPrice : null}
                </strike>
              </div>
              <p>
                <span style={{ color: "red" }}>
                  GIẢM {dataDetail?.discount}%
                </span>{" "}
                CHO VÒNG TAY MUA KÈM:
              </p>
              <p>Size: {dataDetail?.size}</p>
              <p>Thương hiệu: {dataDetail?.brand_name}</p>
              <div className="group__button mt-10">
                <button
                  onClick={() => {
                    history.push({ pathname: `/payment/${dataDetail.id}` });
                  }}
                  className="payment"
                >
                  THANH TOÁN NGAY
                </button>
                <br />
                <button onClick={handleAddcart} className="ADD__CART mt-3">
                  THÊM VÀO GIỎ HÀNG
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="list_cmt">
          <div className="row">
            <div className="col-lg-6">
              Đánh giá, nhận xét của khách hàng
              <div className="flex">
                <h1>4.9</h1>
                <div>
                  {" "}
                  <Rate value={3} />
                </div>
              </div>
              <p>15 đánh giá</p>
            </div>
            <div className="col-lg-6">
              <p>Đánh giá:</p>
              <Rate onChange={setValue} value={rate} />
              <p>Viết bình luận</p>
              <div className="flex">
                <Input
                  value={cmt}
                  onChange={(e) => setCmt(e.target.value)}
                  placeholder="comments"
                />
                <SendOutlined
                  onClick={() => handleSend()}
                  className="iconSend"
                />
              </div>
            </div>
          </div>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 5,
            }}
            dataSource={comments ? comments : []}
            renderItem={(item) => (
              <List.Item
                key={item.id}
                actions={[
                  <IconText
                    icon={StarOutlined}
                    text="156"
                    key="list-vertical-star-o"
                  />,
                  <IconText
                    icon={LikeOutlined}
                    text="156"
                    key="list-vertical-like-o"
                  />,
                  <IconText
                    icon={MessageOutlined}
                    text="2"
                    key="list-vertical-message"
                  />,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avt} />}
                  title={<a href="">{item.username}</a>}
                  description={item.cmt}
                />
                {/* {item.content} */}
              </List.Item>
            )}
          />
        </div>
      </div>
    </MainUser>
  );
}
export default Detail;
