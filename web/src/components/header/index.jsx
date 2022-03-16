import React, { useState,useRef,useEffect } from "react";
import "./style.css";
import {useHistory } from 'react-router-dom';
import { Popover } from 'antd';
import {
  ShoppingCartOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import { Layout, Menu, Avatar, Input, Tooltip } from 'antd'
import Logo from "./logoR.png"
import ListMyOrder from "../listMyOrder"
const Header = () => {
  const ref = useRef()
  const [show, setShow] = useState(false)
  const history = useHistory();
  const [showSearchIcon, setShowSearchIcon] = useState(true)
  const onClick = () => {
    setShow(!show)
    setShowSearchIcon(!showSearchIcon)
  }
  const onEnter = (e) => {
    if (e.key === 'Enter') {
      history.push({ pathname: `/productLookup/${e.target.value}` });
    }
  }
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        // console.log(ref.current, event.target)
        return
      }
      // console.log(ref)

      setShow(false)
      setShowSearchIcon(true)
    }

    document.body.addEventListener('click', onBodyClick, { capture: true })
    return () => {
      document.body.removeEventListener('click', onBodyClick, {
        capture: true,
      })
    }
  }, [])
  return (
    <div className="header">
     <div className="header__left">
      <ul>
        <li>Nam giới</li>
        <li>Nữ giới</li>
        <li>Về curnon</li>
      </ul>
     </div>
     <div onClick={() => {
        history.push({ pathname: `/` });
      }} className="header__center">
      <img style={{width:'200px', height:"100px"}} src={Logo} alt="" />
     </div>
     <div className="header__rignt flex items-center">
     <Popover placement="bottom" content={<ListMyOrder/>} trigger="click">
     <div style={{cursor: "pointer"}} className="flex items-center">
     <span>Giỏ hàng</span>
     <ShoppingCartOutlined style={{color:'black !important', fontSize:'16px'}}/>
     </div>
      </Popover>
      <span className="queue-demo">
        <span style={{textTransform:'capitalize', color:'blue', marginRight:'10px'}}>Tra cứu đơn hàng</span>
                {showSearchIcon && (
                  <a className="hv-icon" onClick={onClick}>
                    <SearchOutlined style={{ marginLeft: '4px', fontSize: '30px' }} />
                  </a>
                )}

                <span ref={ref}>
                  {show ? (
                    <Input
                      style={{
                        width: '200px',
                        height: '40px',
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
     </div>
    </div>
  );
};

export default Header;
