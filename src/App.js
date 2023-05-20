import React from "react";
import Home from "./Page/Home";
import Payment from "./Page/payment";
import Detail from "./Page/Detail";
import Man from "./Page/Man";
import Women from "./Page/Women";
import AllProduct from "./Page/AllProduct";
import ProductLookUp from "./Page/ProductLookUp";
import Login from "./Page/Login";
import SignUp from "./Page/SignUp/index";
import Introduce from "./Page/introduce";
import HomeAdmin from "./Page/HomeAdmin";
import Tables from "./Page/Users";
import Products from "./Page/Products";
import Brands from "./Page/Brands";
import Orders from "./Page/Orders";
import Profile from "./Page/Profile";
import SignUpAdmin from "./Page/SignUp";
import SignInAdmin from "./Page/SignIn";
import EditUser from "./Page/PostUser/Edit";
import EditProduct from "./Page/PostProduct/Edit";
import EditBrand from "./Page/PostBrand/Edit";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import "./App.css";
import "./grid.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ zIndex: "999999" }}
      />
      <Router basename="/">
        <div className="">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/introduce" component={Introduce} />
            <Route path="/detail/:id" exact component={Detail} />
            <Route path="/edit-user" exact component={EditUser} />
            <Route path="/edit-product" exact component={EditProduct} />
            <Route path="/edit-brand" exact component={EditBrand} />
            <Route path="/payment/:id" exact component={Payment} />
            <Route path="/allProduct" exact component={AllProduct} />
            <Route path="/man" exact component={Man} />
            <Route path="/women" exact component={Women} />
            <Route path="/productLookup" exact component={ProductLookUp} />
            <Route path="/sign-up" exact component={SignUpAdmin} />
            <Route path="/sign-in" exact component={SignInAdmin} />
            <Route exact path="/dashboard" component={HomeAdmin} />
            <Route exact path="/users" component={Tables} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/brands" component={Brands} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/profile" component={Profile} />
            <Redirect from="*" to="/home" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
