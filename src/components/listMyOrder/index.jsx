/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import { getOrder } from "../../state/actions";
import Item from "./item"
const Notificaticon = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const dataOrder = useSelector((state) => state.getOrder.data);
    useEffect(() => {
        dispatch(getOrder());
    }, [])
    let total = 0
    return (
        <div className="notifi">
            {dataOrder && dataOrder.map((item) => {
                total = total + parseFloat(item.price)
                return (
                    <Item data={item} />
                )
            })}
            <div style={{borderTop:'1px solid #555'}} className="flex py-3 item-center justify-between">
                <p>Thành tiền</p>
                <p style={{color:"red", fontSize:'17px', fontWeight:"600"}}>{`${total}.000 ₫`}</p>
            </div>
            <div className="flex items-center justify-center">
            <button 
             onClick={() => {
                history.push({ pathname: `/payment/listProductInCart` });
              }}
            className="payment">THANH TOÁN NGAY</button>
            </div>
            
        </div>
    );
};
export default Notificaticon;