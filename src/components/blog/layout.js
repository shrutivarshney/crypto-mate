import React from 'react'
import "./layout.css"



function layout(props) {
  return (
    
   <>

  <div class="card">
      
      <img src={props.image}/>
      <h1 class="text"> {props.body}</h1>
      <h3 class="text date"><i>{props.date} </i></h3>
      
    <div class="info">
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <button><a href={props.link}>Read More </a></button>
    </div>
  </div>


  </>

  )
}

export default layout