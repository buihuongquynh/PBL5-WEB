/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./App.css";
import ListItemMan from "../../components/list-item-man";
import ListItemWomen from "../../components/list-item-women";
import Banner from "../../components/banner/index";
import { useDispatch, useSelector } from "react-redux";
import { getMan } from "../../state/actions";
import { Table, Tag, Spin } from 'antd';

function Home() {
  const dispatch = useDispatch();
  const listProductMan = useSelector((state) => state.getMan.data);
  useEffect(() => {
    dispatch(getMan());
  }, []);
  return listProductMan ? (
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
      <ListItemMan listProductMan={listProductMan} />
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
      <ListItemWomen listProductWoman={listProductMan} />
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        paddingTop: "200px",
      }}
      className="spin"
    >
      <Spin />
    </div>
  );
}
export default Home;
