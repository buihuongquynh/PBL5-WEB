/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getBrand } from "../../state/actions";
import MainUser from "../../components/layout/MainUser";
import Item from "../../components/item";
function Home() {
  const dispatch = useDispatch();
  const listProductMan = useSelector((state) => state.product.data);
  useEffect(() => {
    dispatch(getProduct({ material: "man" }));
    dispatch(getBrand());
  }, []);
  return (
    <MainUser>
      {listProductMan ? (
        <div className="allWrap">
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
