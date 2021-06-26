import React from "react";

import Icons from "./icons";
import Header from "./header";
import Sidebar from "./sidebar";
import Main from "./main";
import Title from "./title";
import Article from "./article"
import Author from "./author";
import Share from "./share";
import Footer from "./footer";

const layout = ({ url, slug, title, hero, author, children }) => (
  <>
    <Icons />
    <div className="page">
      <Header />
      <Main>
        <Title title={title} hero={hero}/>
        <Article>{children}</Article>
        <Author author={author}/>
        <Share url={url} slug={slug} title={title} hero={hero} />
      </Main>
      <Sidebar />
      <Footer />
    </div>
  </>
);

export default layout;
