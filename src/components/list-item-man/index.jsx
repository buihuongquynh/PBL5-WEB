// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import Item from "../item";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../state/actions";
import { getProduct } from "../../state/actions";

const ListItems = () => {
  const dispatch = useDispatch();
  const listItem = useSelector((state) => state.product.data);
  useEffect(() => {
    dispatch(
      getProduct({
        material: "man",
      })
    );
  }, []);
  return (
    <div className="listItem">
      <div style={{ width: "70%" }} className="flex items-center man-wrap">
        {listItem && listItem.slice(0, 4).map((item, index) => index < 5 ? <Item record={item} />: null)}
      </div>
    </div>
  );
};
export default ListItems;
