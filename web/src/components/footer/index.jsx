import React, { useState } from "react";
import "./style.css";
import { Row, Col, Button } from "antd";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top flex justify-center man-wrap">
        <div className="footer__top item-mg">
          <div className="infos">
            <h6>NHẬN THÔNG TIN MỚI NHẤT TỪ CURNON</h6>
            <Row className="colum">
              <Col style={{ marginRight: "27px" }} span={5}>
                <input placeholder="Giới tính" type="text" />
              </Col>
              <Col span={15}>
                <input placeholder="Họ tên..." type="text" />
              </Col>
              <Col className="mt-3" span={21}>
                <input placeholder="Email..." type="text" />
              </Col>
            </Row>
            <button>
              {" "}
              <span>ĐĂNG KÝ NGAY</span>{" "}
            </button>
          </div>
        </div>
        <div className="footer__center item-mg ">
          <div className="contact">
            <h6>LIÊN LẠC</h6>
            <p>cskh@curnonwatch.com</p>
            <p>0868889103</p>
            <div className="icon-contact flex items-center">
              <img
                className="mr-2"
                src="https://curnonwatch.com/_next/static/image/components/footer/assets/icon_fb.2a84c3f988fa77f0dc76bbdcf9ff05c6.svg"
                alt=""
              />
              <img
                className="mr-2"
                src="https://curnonwatch.com/_next/static/image/components/footer/assets/icon_insta.ff542f26952d0e0f560a528bd802d78b.svg"
                alt=""
              />
              <img
                className="mr-2"
                src="https://curnonwatch.com/_next/static/image/components/footer/assets/icon_youtube.ef8c1337942994daa4b5638ec33311ae.svg"
                alt=""
              />
            </div>
            <div className="icon-contact2 flex items-center">
              <img
                className="mr-2"
                src="https://curnonwatch.com/_next/static/image/components/footer/assets/cod.a04c67da9d3edece51e24c08592d20ec.png"
                alt=""
              />
              <img
                className="mr-2"
                src="https://curnonwatch.com/_next/static/image/components/footer/assets/fundiin.0788fcd82b33f7ae4d33f7ee38841806.png"
                alt=""
              />
              <img
                className="mr-2"
                src="https://curnonwatch.com/_next/static/image/components/footer/assets/momo.e7977f80729f86e583f88468e7a823d4.png"
                alt=""
              />
              <img
                src="https://curnonwatch.com/_next/static/image/components/footer/assets/vnpay.2cbf7ebaf4988a49059e72c54e22b62e.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="footer__bot item-mg ">
          <div className="store">
            <h6>HANOI STORES</h6>
            <div className="group__text">
              <p>33 Hàm Long, Hoàn Kiếm.</p>
              <p>9 B7 Phạm Ngọc Thạch, Đống Đa.</p>
              <p>173C Kim Mã, Ba Đình.</p>
            </div>
            <h6>TP.HCM STORES</h6>
            <div className="group__text">
              <p>25 Nguyễn Trãi, P.Bến Thành, Quận 1.</p>
              <p>348 Lê Văn Sỹ, Phường 14, Quận 3.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="center">
        <div className="header">
          <div className="header__left">
            <ul>
              <li>Đồng hồ nam</li>
              <li>Đồng hồ nữ</li>
              <li>Phụ kiện</li>
            </ul>
          </div>
          <div className="header__rignt flex items-center">
            <span>Chính sách vận chuyển</span>
            <span>|</span>
            <span>Đổi trả & Bảo hành</span>
          </div>
        </div>
      </div>
      <div className="bot">
        <div className="bt__left">
          <h6>© 2021 - Bản quyền của CTCP PHÁT TRIỂN SẢN PHẨM SÁNG TẠO VIỆT</h6>
          <p>Giấy chứng nhận ĐKKD số 0108150321 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp ngày 29/01/2018 123C Thụy Khuê, Tây Hồ, Hà Nội</p>
        </div>
        <div className="bt__right">
          <img src="https://curnonwatch.com/_next/static/image/components/footer/assets/certificate.1b63a013a1590b88bc486a876c804d58.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
