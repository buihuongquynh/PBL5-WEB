
import { useState, useEffect } from "react";
import Header from "../header";
import Footer from "../footer";
function MainUser({ children }) {
  return (
    <div>
      <Header/>
        <div className="content">{children}</div>
        <Footer />
    </div>
  );
}
export default MainUser;
