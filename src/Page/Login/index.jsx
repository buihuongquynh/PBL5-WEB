import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userLogin } from "../../state/actions";
import "./Login.css";
import MainUser from "../../components/layout/MainUser";

function Login() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handlerLoginUser = () => {
    dispatch(userLogin(user));
  };
  return (
    <MainUser>
      <div className="box">
        <h1>Đăng nhập để sử dụng</h1>
        <div className="">
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <div className="dn">
            <span onClick={handlerLoginUser}>Đăng nhập</span>
          </div>
          <p>
            <a href="a">Quên mật khẩu?</a>
          </p>
          <div className="dk">
            <Link to="/signup">Đăng ký tài khoản mới</Link>
            <br />
          </div>
        </div>
      </div>
    </MainUser>
  );
}

export default Login;
