import { Avatar, List, Space, Skeleton } from "antd";
import { StarOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons";
import MainUser from "../../components/layout/MainUser";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getOrder, deleteOrder } from "../../state/actions";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const userDetais = JSON.parse(localStorage.getItem("info"));
  const data = useSelector((state) => state.order.data);
  const history = useHistory();
  const dispatch = useDispatch();
  const handeDelete = (id) => {
    dispatch(
      deleteOrder({
        id: id,
        user_id: userDetais?.id,
      })
    );
  };
  useEffect(() => {
    dispatch(
      getOrder({
        user_id: userDetais?.id,
      })
    );
  }, []);
  return (
    <MainUser>
      <div className="productLookUP container">
        {data && (
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <a
                    onClick={() => handeDelete(item.order)}
                    style={{ fontSize: "16px", color: "red" }}
                    key="list-loadmore-more"
                  >
                    Delete
                  </a>,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item?.images} />}
                  title={
                    <a
                      className="name"
                      onClick={() => history.push(`/detail/${item.id}`)}
                    >
                      {item.name}
                    </a>
                  }
                  description={<p className="price">{`${item?.price} đ`}</p>}
                />
                <div className="status">{item?.status}</div>
              </List.Item>
            )}
          />
        )}
      </div>
    </MainUser>
  );
};

export default App;
