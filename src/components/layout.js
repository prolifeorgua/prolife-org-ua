import React from "react";

import Icons from "./icons";
import Header from "./header";
import Sidebar from "./sidebar";
import Main from "./main";
// import Title from "./title";
// import Author from "./author";
// import Share from "./share";
import Footer from "./footer";

export default ({ children }) => (
  <>
    <Icons />
    <div className="container">
      <Header />
      <div className="middle">
        <Sidebar />
        <Main>
          {/* <Title /> */}
          {children}
          {/* <Author /> */}
          {/* <Share /> */}
        </Main>
      </div>
      <Footer />
    </div>
  </>
);
