import React from "react";
import "./style.css";
import {
  CarOutlined,
  InsuranceOutlined,
  HeatMapOutlined,
} from "@ant-design/icons";
function Banner() {
  return (
    <>
      <div className="banner">
        <div className="text">
          <div className="jackson">JACKSON</div>
          <p className="unbre">UNBREAKABLE</p>
          <p className="des">Dòng Đồng hồ Lặn đầu tiên đến từ một thương</p>
          <p className="des mb-3">
            hiệu Việt. Thiết kế mạnh mẽ, chống chịu mọi áp lực.
          </p>
          <a href="/">shop now</a>
        </div>
      </div>
      <div className="banner__bot p-5 flex items-center justify-center">
        <div
                  className="banner_bot_cen flex items-center justify-between		 "
        >
          <div className="item">
            <CarOutlined />
            <span>FREESHIP ĐƠN HÀNG 700K</span>
          </div>
          <div className="item">
            <InsuranceOutlined />
            <span>BẢO HÀNH 10 NĂM</span>
          </div>
          <div className="item">
            <HeatMapOutlined />
            <span>ĐỔI TRẢ MIỄN PHÍ TRONG VÒNG 3 NGÀY</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner;
