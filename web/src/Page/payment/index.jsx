/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getMan } from "../../state/actions";
import { Form, Input, Button, Checkbox } from "antd";
import ProductInfo from "./product-info";
import { useParams } from "react-router-dom";
import { getDetail, getOrder, AddInfo } from "../../state/actions";
import { useHistory } from "react-router-dom";
function Home() {
  const dispatch = useDispatch();
  const param = useParams();
  const history = useHistory();

  let dataOrder = [];
  const dataCart = useSelector((state) => state.getOrder.data);
  const dataDetail = useSelector((state) => state.getDetail.data);
  useEffect(() => {
    dispatch(getDetail(param.id));
    dispatch(getOrder());
  }, []);
  if (param.id === "listProductInCart") {
    dataOrder = dataCart;
  } else {
    dataOrder.push(dataDetail);
  }
  const onFinish = (values) => {
    const id_product = []
    dataOrder.map((item)=>(id_product.push(item)))
    const data = {
      fullname: values.fullname,
      email: values.email,
      address:values.address ,
      phone_number: values.phone_number,
      id_product: id_product
      }
      console.log(data,"data")
      dispatch(AddInfo(data));
      history.push({ pathname: `/` });

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  let total = 0;
  return (
    <div className="pay">
      <div className="scrolls">
        <div className="centered">
          <a className="logo">
            <img
              src="https://curnonwatch.com/_next/static/image/assets/images/icons/logo.25d9bce7b5bbc8c0786175f169af2c42.svg"
              alt="logo"
            />
          </a>
          <div className="customer_info">
            <h3>THÔNG TIN KHÁCH HÀNG</h3>
            {/* form */}
            <div className="form">
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input style={{ width: "500px" }} placeholder="email" />
                </Form.Item>
                <div className="flex items-center justify-between sc-colum	">
                  <Form.Item
                    name="fullname"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input style={{ width: "245px" }} placeholder="họ tên" />
                  </Form.Item>
                  <Form.Item
                    name="phone_number"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input
                      style={{ width: "245px" }}
                      placeholder="số điện thoại"
                    />
                  </Form.Item>
                </div>
                <Form.Item
                  name="address"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input style={{ width: "500px" }} placeholder="địa chỉ " />
                </Form.Item>
                {/* end form */}
                <div className="shipping">
                  <p className="shipping_text">
                    *Phương thức vận chuyển là <span>FREESHIP</span> với đơn
                    hàng từ 700.000đ
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <Form.Item>
                    <button
                      htmlType="submit"
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
                  </Form.Item>
                </div>
              </Form>
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
                dataOrder.map((data) => {
                  total = total + parseFloat(data.price);

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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
