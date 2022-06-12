/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getBrand } from "../../state/actions";
import MainUser from "../../components/layout/MainUser";
import Item from "../../components/item";
import { Input, Spin, Select } from "antd";
const { Option } = Select;
function Home() {
  const dispatch = useDispatch();
  const listProductMan = useSelector((state) => state.product.data);
  const brands = useSelector((state) => state.brand.data);
  const categorys = ["men", "women", "jewels"];
  console.log(brands, "brands");
  const ChangeCategory = (value) => {
    dispatch(getProduct({ material: value }));
  };
  const ChangeBrand = (value) => {
    dispatch(getProduct({ brands: value }));
  };
  useEffect(() => {
    dispatch(getProduct());
    dispatch(getBrand());
  }, []);
  const ChangeName = (e) => {
    console.log(e.target.value);
    dispatch(getProduct({ name: e.target.value }));
  };
  return (
    <MainUser>
      {listProductMan ? (
        <div className="allWrap">
          <div className="flex items-center">
            <Input
              size="large"
              style={{
                width: 200,
              }}
              className="mr-3"
              placeholder="Nhập tên sản phẩm"
              onChange={ChangeName}
            />
            <Select
              className="mr-3"
              placeholder={categorys && categorys[0]}
              size="large"
              style={{
                width: 200,
              }}
              onChange={ChangeCategory}
            >
              {categorys?.map((item) => (
                <Option value={item}>{item}</Option>
              ))}
            </Select>
            {/* brand */}
            <Select
              defaultValue={brands && brands[0]?.name}
              className="mr-3"
              placeholder={brands && brands[0]?.name}
              size="large"
              style={{
                width: 200,
              }}
              onChange={ChangeBrand}
            >
              {brands?.map((item) => (
                <Option value={item.id}>{item.name}</Option>
              ))}
            </Select>
          </div>
          <h1>Tất cả sản phẩm</h1>
          <div className="allSp">
            {listProductMan &&
              listProductMan.map((item) => (
                <div className="col-md-3">
                  <Item record={item} />
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div>No data</div>
      )}
    </MainUser>
  );
}
export default Home;
