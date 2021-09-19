import React from "react";

import Icons from "./icons";
import Header from "./header";
import Sidebar from "./sidebar";
import Tiles from "./tiles";
import Main from "./main";
import Title from "./title";
import Article from "./article"
import Author from "./author";
import Share from "./share";
import Footer from "./footer";

const layout = ({ url, slug, title, hero, author, children }) => {
  const isHome = slug === "/";
  const welcome = "Життя- це мить. Її не можна прожити спочатку на чернетці, а потім переписати на чистовик. Антон Чехов!"

  return (
    <>
      <Icons />
      <div className={isHome ? "home" : "page"}>
        <Header />
        <Main>
          <Title hero={hero} title={isHome ? welcome : title} />
          <Article>{children}</Article>
          <Author author={author}/>
          {!isHome && <Share url={url} slug={slug} title={title} hero={hero} />}
        </Main>
        {isHome ? <Tiles /> : <Sidebar />}
        {isHome && <Share url={url} slug={slug} title={title} hero={hero} />}
        <Footer />
      </div>
    </>
  )
};

export default layout;
