import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../state/actions";

const Item = ({ record }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const userDetais = JSON.parse(localStorage.getItem("info"));

  const handleAddCart = () => {
    const data = {
      user_id: userDetais.id,
      product_id: record.id,
    };
    dispatch(addCart(data));
  };

  return (
    <div className="item">
      <div className="item__center">
        <img
          alt="details"
          src={record.images}
          onClick={() => {
            history.push({ pathname: `/detail/${record.id}` });
          }}
        />
        <span onClick={handleAddCart} className="add__cart">
          Thêm vào giỏ hàng
        </span>
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
