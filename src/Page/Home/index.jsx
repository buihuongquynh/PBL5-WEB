/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./App.css";
import ListItemMan from "../../components/list-item-man";
import ListItemWomen from "../../components/list-item-women";
import Jewels from "../../components/trang-suc"
import Banner from "../../components/banner/index";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../state/actions";
import { Table, Tag, Spin } from "antd";
import MainUser from "../../components/layout/MainUser";
function Home() {
  return(
  <MainUser>
      <div className="home">
        <Banner />
        <h1 className="title">MEN'S BEST SELLERS</h1>
        <a
          href="/allProduct"
          style={{ textAlign: "center", cursor: "pointer" }}
          className="showAll flex items-center justify-center"
        >
          <i className="mr-2">Xem tất cả</i>{" "}
          <img
            src="https://curnonwatch.com/_next/static/image/components/home/components/images/right.0a6374069ad9b7e8143d3b48e3e79caf.svg"
            alt=""
          />
        </a>
        <ListItemMan/>
        <h1 className="title">WOMEN'S BEST SELLERS</h1>
        <a
          href="/allProduct"
          style={{ textAlign: "center", cursor: "pointer" }}
          className="showAll flex items-center justify-center"
        >
          <i className="mr-2">Xem tất cả</i>{" "}
          <img
            src="https://curnonwatch.com/_next/static/image/components/home/components/images/right.0a6374069ad9b7e8143d3b48e3e79caf.svg"
            alt=""
          />
        </a>
        <ListItemWomen />
        <h1 className="title">JEWELS BEST SELLERS</h1>
        <a
          href="/allProduct"
          style={{ textAlign: "center", cursor: "pointer" }}
          className="showAll flex items-center justify-center"
        >
          <i className="mr-2">Xem tất cả</i>{" "}
          <img
            src="https://curnonwatch.com/_next/static/image/components/home/components/images/right.0a6374069ad9b7e8143d3b48e3e79caf.svg"
            alt=""
          />
        </a>
        <Jewels />
      </div>
    
  </MainUser>)
}
export default Home;
