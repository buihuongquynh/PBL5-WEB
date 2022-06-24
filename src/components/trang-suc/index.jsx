// eslint-disable-next-line no-unused-vars
import React, { useEffect,useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import Item from "../item";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../state/actions";
import { getProduct } from "../../state/actions";
import { BASE_URL } from "../../constants/constant";
import queryString from 'query-string';
import axios from 'axios';
const Jewels = () => {
  const [listItem, setListItem] = useState([])
  useEffect(() => {
  console.log(listItem,"listitem")
  axios.get( BASE_URL + '/product', {
    params: {
      material: "Jewels"
    }
  })
  .then(function (response) {
    setListItem(response.data)
  })
  .catch(function (error) {
    console.log(error);
  })
  }, []);
  console.log(listItem,"list")
  return (
    <div className="listItem">
      <div style={{ width: "70%" }} className="flex items-center man-wrap">
      {listItem && listItem.slice(0, 4).map((item, index) =><Item record={item} />)}
      </div>
    </div>
  );
};
export default Jewels;
