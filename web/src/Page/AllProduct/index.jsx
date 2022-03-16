/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getMan } from "../../state/actions";
import Item from "../../components/item";
import {
  Input,
  Spin
} from "antd";
function Home() {
  const dispatch = useDispatch();
  const listProductMan = useSelector((state) => state.getMan.data);
  const [dataTable, setDataTable] = useState(listProductMan);
  useEffect(() => {
    dispatch(getMan());
    setDataTable(listProductMan);
  }, [listProductMan]);
  const onSearch = (e) => {
    const result = listProductMan.filter((item) =>
      item.name.toLowerCase().includes(e.target.value)
    );
    setDataTable(result);
  };
  return (
    dataTable? (
    <div className="allWrap">
      <div className="search">
        <Input
          height={50}
          className="mr-3"
          placeholder="Nhập tên sản phẩm"
          onChange={onSearch}
        />
      </div>
      <h1>Tất cả sản phẩm</h1>

      <div className="allSp">
        {dataTable &&
          dataTable.map((item) => (
            <div className="col-md-3">
              <Item record={item} />
            </div>
          ))}
      </div>
    </div>)
    :(
      (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            paddingTop:'200px'
          }}
          className="spin"
        >
          <Spin />
        </div>)
    )
  );
}
export default Home;
