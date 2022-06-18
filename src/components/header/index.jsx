import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { Popover, Avatar, Image } from "antd";
import {
  ShoppingCartOutlined,
  SearchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import Logo from "./logoR.png";
import ListMyOrder from "../listMyOrder";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutPageSuccess } from "../../state/actions";
const Header = () => {
  const ref = useRef();
  const dispath = useDispatch();
  const [show, setShow] = useState(false);
  const history = useHistory();
  const userDetais = JSON.parse(localStorage.getItem("info"));
  const [showSearchIcon, setShowSearchIcon] = useState(true);
  const onClick = () => {
    setShow(!show);
    setShowSearchIcon(!showSearchIcon);
  };
  const onEnter = (e) => {
    if (e.key === "Enter") {
      history.push({ pathname: `/productLookup/${e.target.value}` });
    }
  };
  const handleLogout = () =>{
    dispath(userLogoutPageSuccess());
    history.push('/sign-in')
  }
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setShow(false);
      setShowSearchIcon(true);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);
  return (
    <div className="header">
      <div className="header__left">
        <ul>
          <li>Nam giới</li>
          <li>Nữ giới</li>
          <li>Về curnon</li>
        </ul>
      </div>
      <div
        onClick={() => {
          history.push({ pathname: `/` });
        }}
        className="header__center"
      >
        <img style={{ width: "200px", height: "100px" }} src={Logo} alt="" />
      </div>
      <div className="header__rignt flex items-center">
        <Popover placement="bottom" content={<ListMyOrder />} trigger="click">
          <div style={{ cursor: "pointer" }} className="flex items-center">
            <span>Giỏ hàng</span>
            <ShoppingCartOutlined
              style={{ color: "black !important", fontSize: "16px" }}
            />
          </div>
        </Popover>
        <span className="queue-demo">
          {showSearchIcon && (
            <a className="hv-icon" onClick={onClick}>
              <SearchOutlined style={{ marginLeft: "4px", fontSize: "30px" }} />
            </a>
          )}
          <span ref={ref}>
            {show ? (
              <Input
                style={{
                  width: "200px",
                  height: "40px",
                }}
                name="name"
                className="no-border"
                placeholder="Std"
                bordered
                autoComplete="off"
                onKeyPress={onEnter}
              />
            ) : null}
          </span>
        </span>
        <div style={{ cursor: "pointer" }} className="flex items-center">
          {userDetais ? (
            <>
              <Popover
                placement="bottomRight"
                content={<div style={{fontSize:'20px'}}><a>PROFILE</a><br/> <a onClick={handleLogout}>LOGOUT</a> <br/> <a href="/productLookup">Đơn hàng của bạn</a></div>}
                trigger="click"
              >
                <div className="flex items-center">
                  <a href="/profile">{userDetais.name}</a>
                  <Avatar
                    src={<Image src={userDetais.avt} style={{ width: 32 }} />}
                  />
                </div>
              </Popover>
            </>
          ) : (
            <a href="/sign-in">Login</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
