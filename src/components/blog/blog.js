import React from "react";
import blogdatas from "./blogdata";
import Layout from "./layout";
import "./layout.css";
import Blogbanner from "./blogbanner";

function add(blogdata) {
  return (
    <Layout
      key={blogdata.id}
      image={blogdata.imageUrl}
      title={blogdata.title}
      body={blogdata.body}
      link={blogdata.link}
      date={blogdata.date}
    />
  );
}

function blog() {
  return (
    <>
      <Blogbanner />
      <div className="flex flex-wrap justify-center w-full gap-20 px-2 py-10 mt-10 wrapper">{blogdatas.map(add)}</div>
    </>
  );
}
export default blog;
