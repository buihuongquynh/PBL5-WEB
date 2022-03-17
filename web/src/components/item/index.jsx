/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../state/actions";

const Item = ({ record }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleAddCart = () => {
    dispatch(addCart(record));
  };
  return (
    <div className="item">
      <div className="item__center">
        <img
          src={record.img}
          onClick={() => {
            history.push({ pathname: `/detail/${record.id}` });
          }}
        />
        <a onClick={handleAddCart} className="add__cart">
          Thêm vào giỏ hàng
        </a>
        <p
          onClick={() => {
            history.push({ pathname: `/detail/${record.id}` });
          }}
          className="mt-3"
        >
          {record.name}
        </p>

        <p
          onClick={() => {
            history.push({ pathname: `/detail/${record.id}` });
          }}
        >
          {" "}
          {record.trademark}
        </p>
        <div
          onClick={() => {
            history.push({ pathname: `/detail/${record.id}` });
          }}
          className="price mb-4"
        >
          <p className="order">{record.price}</p>
          <strike letter className="old ml-1">
            {record.oldPrice}
          </strike>
        </div>
      </div>
    </div>
  );
};
export default Item;
