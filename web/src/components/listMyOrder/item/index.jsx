import React from "react";
import "./style.css";
import {CloseOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../../../state/actions";
const Item = ({ data }) => {
  const dispatch = useDispatch();
  const handleDelete =()=>{
    dispatch(deleteCart(data.id))
  }
  return (
    <div className="item-notifi">
      <div className="group__left">
        <div className="avt">
          <img src={data.img} alt="" />
        </div>
        <div className="text">
          <div
            style={{ marginTop: "3px" }}
            className=""
          >
            <p style={{fontWeight:'800'}}>{data.name}</p>
            <p>{data.trademark}</p>
          </div>
        </div>
      </div>

      <div style={{ color: "#888" }} className="time flex items-center">
     <span>{data.price}</span>
     <CloseOutlined onClick={handleDelete} />
      </div>
    </div>
  );
};
export default Item;