import React from 'react'
import "./layout.css"



function layout(props) {
  return (
    
   <>

  <div className="card">
      
      <img src={props.image} alt=""/>
      <h1 className="text"> {props.body}</h1>
      <h3 className="text date"><i>{props.date} </i></h3>
      
    <div className="info">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <button><a href={props.link}>Read More </a></button>
    </div>
  </div>


  </>

  )
}

export default layout