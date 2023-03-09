import React from "react";

import Icons from "./icons";
import Header from "./header";
import Sidebar from "./sidebar";
import Tiles from "./tiles";
import Main from "./main";
import Motto from "./motto";
import Title from "./title";
import Article from "./article"
import Author from "./author";
import Share from "./share";
import Footer from "./footer";

const Layout = ({ url, slug, title, hero, author, children }) => {
  const isHome = slug === "/";

  return (
    <>
      <Icons />
      <div className={isHome ? "home" : "page"}>
        <Header />
        <Main>
          { isHome && <Motto hero={hero} payload={author} />}
          {!isHome && <Title hero={hero} title={title} />}
          <Article>{children}</Article>
          {!isHome && <Author author={author}/>}
          {!isHome && <Share url={url} slug={slug} title={title} hero={hero} />}
        </Main>
        {isHome ? <Tiles /> : <Sidebar />}
        {isHome && <Share url={url} slug={slug} title={title} hero={hero} />}
        <Footer />
      </div>
    </>
  )
};

export default Layout;
