import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import "./style.css";
import { getDetail } from '../../state/actions';
import { useParams } from "react-router-dom";
import { addCart } from "../../state/actions";
import "./style.css";
import { useHistory } from "react-router-dom";
function Detail() {
  const param = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const dataDetail = useSelector((state) => state.getDetail.data);
  useEffect(() => {
    dispatch(getDetail(param.id));
  }, [])
const handleAddcart =()=>{
  dispatch(addCart(dataDetail));
}
  return (
    <div className="Detail">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-4">
          <img
            src={dataDetail ? dataDetail.img : null}
            alt=""
          />
        </div>
        <div className="col-md-4">
          <div className="card">
            <p className="colo">{dataDetail ? dataDetail.trademark : null}</p>
            <div className="name">{dataDetail? dataDetail.name: null}</div>
            <div className="price mb-4">
              <p className="order">{dataDetail ? dataDetail.price: null}</p>
              <strike letter className="old ml-1">
                {dataDetail? dataDetail.oldPrice: null}
              </strike>
            </div>
            <div className="status">
              tình trạng: <span style={{color:"rgb(59, 177, 0)"}} className="st">{dataDetail ?dataDetail.status : null}</span> 
            </div>
            <p><span style={{color:"red"}}>GIẢM 20%</span> CHO VÒNG TAY MUA KÈM:</p>
            <div className="group__button mt-10">
              <button
               onClick={() => {
                history.push({ pathname: `/payment/${dataDetail.id}` });
              }}
              className="payment">THANH TOÁN NGAY</button>
              <br/>
              <button onClick={handleAddcart} className="ADD__CART mt-3">THÊM VÀO GIỎ HÀNG</button>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div></div>
    </div>
  );
}
export default Detail;
