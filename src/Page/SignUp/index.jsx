import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userSignUp } from "../../state/actions";
import { useHistory, Link } from "react-router-dom";
import "./Signup.css";
import { DatePicker } from "antd";

function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [data, setData] = useState({
    name: "",
    password: "",
    password_confirmation: "",
    email: "",
  });
  const onChangeDate = (date, dateString) => {
    setData({ ...data, date_of_birth: date });
  };

  const handlerSignUp = () => {
    dispatch(userSignUp(data));
    history.push("/login");
  };
  return (
    <div>
      {/* <Header /> */}
      <div className="">
        <input
          type="text"
          value={data.name}
          placeholder="UserName"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <input
          type="text"
          value={data.email}
          placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <input
          type="text"
          value={data.password}
          placeholder="Mật khẩu"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <input
          type="text"
          value={data.password_confirmation}
          placeholder="Nhập lại mật khẩu"
          onChange={(e) =>
            setData({ ...data, password_confirmation: e.target.value })
          }
        />
        <DatePicker onChange={onChangeDate} />
        <div className="dn">
          <a onClick={handlerSignUp} href="#">
            Đăng Ký
          </a>
        </div>
        <p>
          <a href="a">
            Bạn đã có tài khoản? <span />
          </a>
          <Link to="/login">Đăng nhập</Link>
        </p>
        <br />
      </div>
    </div>
  );
}

export default SignUp;
