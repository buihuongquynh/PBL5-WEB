import React from "react";
import "./App.css";
import ListItem from "../../components/ListItem";
import Banner from "../../components/banner/index";
import MainUser from "../../components/layout/MainUser";

function Home() {
  return (
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
        <ListItem category="men" />
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
        <ListItem category="women" />
        <h1 className="title">JEWELS BEST SELLERS</h1>
        <a
          href="/allProduct"
          style={{ textAlign: "center", cursor: "pointer" }}
          className="showAll flex items-center justify-center"
        >
          <i className="mr-2">Xem tất cả</i>
          <img
            src="https://curnonwatch.com/_next/static/image/components/home/components/images/right.0a6374069ad9b7e8143d3b48e3e79caf.svg"
            alt=""
          />
        </a>
        <ListItem category="jewel" />
      </div>
    </MainUser>
  );
}
export default Home;
