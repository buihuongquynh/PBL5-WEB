/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getMan } from "../../state/actions";
import { Form, Input, Button, Checkbox } from "antd";
import ProductInfo from "./product-info";
import MainUser from "../../components/layout/MainUser";
import { useParams } from "react-router-dom";
import { getDetail, getCart, addOrder, deleteCart } from "../../state/actions";
import { useHistory } from "react-router-dom";
function Home() {
  const dispatch = useDispatch();
  const param = useParams();
  const history = useHistory();
  const userDetais = JSON.parse(localStorage.getItem("info"));
  let dataOrder = [];
  const dataCart = useSelector((state) => state.cart.data);
  const dataDetail = useSelector((state) => state.getDetail.data);
  useEffect(() => {
    dispatch(getDetail(param.id));
    dispatch(
      getCart({
        userId: userDetais?.id,
      })
    );
  }, []);
  if (param.id === "listProductInCart") {
    dataOrder = dataCart;
  } else {
    dataOrder.push(dataDetail);
  }
  const handleSubmit = () => {
    if (param.id === "listProductInCart") {
      dataOrder.forEach((element) => {
        dispatch(
          addOrder({
            user_id: element?.user_id,
            product_id: element?.id,
            status: "Đang chờ duyệt",
          })
        );
        dispatch(
          deleteCart({
            cart_id: element?.cart_id,
          })
        );
      });
    } else {
      dispatch(
        addOrder({
          user_id: userDetais?.id,
          product_id: param?.id,
          status: "Đang chờ duyệt",
        })
      );
    }
    history.push("/productLookup")
  };
  let total = 0;
  return (
    <MainUser>
      <div className="pay">
        <div className="scrolls">
          <div className="centered">
            <div className="customer_info">
              <div className="row">
                <img
                  src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FBackground-14.07c55f52.jpg&w=384&q=100"
                  alt=""
                />
                <img
                  src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FBackground-11.cac17917.jpg&w=384&q=100"
                  alt=""
                />
              </div>
              <p className="note">
                *Lưu ý: Curnon sẽ liên lạc lại với bạn trong 24h (trừ thứ 7, chủ
                nhật và các ngày lễ) để xác nhận đơn hàng.
              </p>
            </div>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="order">
              <div className="order_header">
                <p>ĐƠN HÀNG</p>
                <span style={{ cursor: "pointer" }}>Sửa</span>
              </div>
              <div className="order_body">
                {dataOrder &&
                  dataOrder?.map((data) => {
                    total = total + parseFloat(data?.price);
                    return <ProductInfo data={data} dataOrder={dataOrder} />;
                  })}
                <div className="coupon">
                  <form className="coupon_code" autoComplete="off">
                    <input
                      className="coupon_code_input"
                      type="text"
                      name="coupon_code"
                      placeholder="Nhập mã khuyến mãi..."
                      autoComplete="false"
                      defaultValue
                    />
                    <button className="coupon_code_button">ÁP DỤNG</button>
                  </form>
                </div>
                <div className="order_sum">
                  <div>
                    <span className="order_sum_text">Thành tiền</span>
                    <span className="order_sum_price">{`${total}0.000 ₫`}</span>
                  </div>
                  <div className="discount">
                    <span className="order_sum_text">Mã giảm giá</span>
                    <span className="order_sum_price">0&nbsp;₫</span>
                  </div>
                  <div>
                    <span className="order_sum_text">Phí ship</span>
                    <span className="order_sum_price">0&nbsp;₫</span>
                  </div>
                </div>
                <div className="order_total">
                  <div className="order_total_price">
                    <span className="order_sum_text">TỔNG:</span>
                    <span className="order_sum_price">{`${total}0.000 ₫`}</span>
                  </div>
                  <div className="order_total_pay">
                    <p className="order_sum_text">(Đã bao gồm VAT)</p>
                    <p className="order_sum_text1">
                      hoặc 878.000&nbsp;₫ x 3 kỳ
                      <br /> với
                      <span> Fundiin </span>
                    </p>
                  </div>
                  <button
                    onClick={() => handleSubmit()}
                    style={{
                      fontSize: "20px",
                      background: "#53C66E",
                      color: "white",
                      padding: "10px 30px",
                      width: "200px",
                      borderRadius: "10px",
                      fontWeight: "900",
                    }}
                  >
                    Đặt hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainUser>
  );
}
export default Home;
