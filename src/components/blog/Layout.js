import React, { useState, useEffect } from "react";
import "../Learn/blog/layout.css";
import axios from "axios";

const Layout = () => {
  const [blogs, setblogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    axios
      .get(
        "https://newsapi.org/v2/everything?q=crypto&apiKey=dade327056ba475e92bdeb50d7fbd9ab"
      )
      .then((res) => {
        setblogs(res.data.articles);
        // console.log(res.data);
        setLoading(false);
      })
      .catch((error) => alert("Oops! We are facing an error."));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center w-full gap-20 px-2 py-10 mt-10 wrapper">
        {blogs.map((value) => {
          return (
            <div className="card group" key={value.url}>
              <img src={value.urlToImage} alt="" />
              <h1 className="absolute pb-1 text-sm font-semibold text-gray-200 opacity-100 bottom-7 left-3 group-hover:hidden">
                {" "}
                {value.title}
              </h1>
              <h3 className="absolute text-sm font-semibold opacity-100 text-custom-green bottom-1 text left-3">
                <i>{value.publishedAt} </i>
              </h3>

              <div className="info">
                <h4 className="text-lg font-bold tracking-wider">
                  {value.content.slice(0,150)}
                </h4>
                <p className="text-sm tracking-wide">{value.body}</p>
                <button className="px-4 py-2 mt-2 text-sm font-semibold rounded text-custom-blue bg-custom-green hover:text-custom-green hover:bg-custom-blue hover:ring-2 hover:ring-custom-green">
                  <a href={value.url}>Read More</a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Layout;
