import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./Page/Home";
import Payment from "./Page/payment";
import Detail from "./Page/Detail";
import AllProduct from "./Page/AllProduct";
import ProductLookUp from "./Page/ProductLookUp";
import Login from "./Page/Login";
import SignUp from "./Page/SignUp";
import HomeAdmin from "./Page/HomeAdmin";
import Tables from "./Page/Tables";
import Billing from "./Page/Billing";
import Rtl from "./Page/Rtl";
import Profile from "./Page/Profile";
import SignUpAdmin from "./Page/SignUp";
import SignInAdmin from "./Page/SignIn";
import Main from "./components/layout/Main";
import MainUser from "./components/layout/MainUser";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import "./App.css";
import "./grid.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

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
            {/* <MainUser> */}
            <Route exact path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/detail/:id" exact component={Detail} />
            <Route path="/payment/:id" exact component={Payment} />
            <Route path="/allProduct" exact component={AllProduct} />
            <Route path="/productLookup/:id" exact component={ProductLookUp} />
            <Route path="/sign-up" exact component={SignUpAdmin} />
            <Route path="/sign-in" exact component={SignInAdmin} />
            {/* </MainUser> */}
              <Route exact path="/dashboard" component={HomeAdmin} />
              <Route exact path="/tables" component={Tables} />
              <Route exact path="/billing" component={Billing} />
              <Route exact path="/rtl" component={Rtl} />
              <Route exact path="/profile" component={Profile} />
              <Redirect from="*" to="/home" />
          
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
