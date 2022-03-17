import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./Page/Home";
import Payment from "./Page/payment";
import Detail from "./Page/Detail";
import AllProduct from "./Page/AllProduct"
import ProductLookUp from "./Page/ProductLookUp"
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/antd.css";
import "./App.css";
import "./grid.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detail/:id" exact component={Detail} />
            <Route path="/payment/:id" exact component={Payment} />
            <Route path="/allProduct" exact component={AllProduct} />
            <Route path="/productLookup/:id" exact component={ProductLookUp} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
