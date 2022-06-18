/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect,useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getMan } from "../../../state/actions";

function Home({ data, dataOrder }) {
  const [count,setCount] = useState(1)
  const addItem = () => {
    setCount(count+1)
    const dataNew = {
      id: Math.floor(Math.random() * (100000 - 100)) + 100,
      image: data.image,
      name: data.name,
      material: data.material,
      category: data.category,
      discount: data.discount,
    };
    dataOrder.push(dataNew)

  };
  const deleteItem = () => {
    if(count > 0) {
      setCount(count -1)
      for( var i = 0; i < dataOrder.length-1; i++){ 
        if ( dataOrder[i].name === data.name) {
          dataOrder.splice(i, 1); 
          break
        }
     }
    }
   
  };
  return (
    <div className="product_info">
      <div className="product_info_item">
        <div className="product_img">
          <img src={data?.image} />
        </div>
        <div className="product_detail">
          <p className="product_name">{data?.name}</p>
          <p className="product_price_discount">{data?.material}</p>

        </div>

        <div className="product_price">
        <p className="product_price_discount">{data?.price}</p>
          <p className="product_subName product_price_original">{data?.discount}%</p>
        </div>
        <div className="cout_down">
          <b onClick={addItem} className="mr-2">
            +
          </b>
          <b onClick={deleteItem}>-</b>
          <b className="count mr-3">{count}</b>
        </div>
      </div>
    </div>
  );
}
export default Home;
