// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./style.css";
import Item from "../item";
import { BASE_URL } from "../../constants/constant";
import axios from "axios";

const ListItem = ({ category }) => {
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL + "/get-product-by-category", {
        params: {
          category: category,
        },
      })
      .then(function (response) {
        setListItem(response.data);
      })
      .catch(function (error) {});
  }, []);

  return (
    <div className="listItem">
      <div style={{ width: "70%" }} className="flex items-center man-wrap">
        {listItem &&
          listItem.slice(0, 8).map((item, index) => <Item record={item} />)}
      </div>
    </div>
  );
};
export default ListItem;
