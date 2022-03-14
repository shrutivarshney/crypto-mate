import React from "react";
import "./layout.css";

function layout(props) {
  return (
    <>
      <div className="card group">
        <img src={props.image} alt="" />
        <h1 className="absolute pb-1 text-sm font-semibold text-gray-200 opacity-100 bottom-7 left-3 group-hover:hidden"> {props.body}</h1>
        <h3 className="absolute text-sm font-semibold opacity-100 text-custom-green bottom-1 text left-3">
          <i>{props.date} </i>
        </h3>

        <div className="info">
          <h1 className="text-lg font-bold tracking-wider">{props.title}</h1>
          <p className="text-sm tracking-wide">{props.body}</p>
          <button className="px-4 py-2 mt-2 text-sm font-semibold rounded text-custom-blue bg-custom-green hover:text-custom-green hover:bg-custom-blue hover:ring-2 hover:ring-custom-green">
            <a href={props.link}>Read More</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default layout;
