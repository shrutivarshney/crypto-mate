import React from 'react'
import blogdatas from './blogdata';
import Layout from './layout';
 import "./layout.css"
import Blogbanner from './blogbanner';
import Footer from '../shared/Footer/footer';
import Navbar from '../shared/Navbar/navbar';

function add(blogdata){
    return(
      <Layout
      key={blogdata.id}
      image= {blogdata.imageUrl}
      title = {blogdata.title}
      body ={blogdata.body}
      link ={blogdata.link}
      date={blogdata.date}
  
     />

    );
  }









  function blog() {
    return ( 
      <>
      <Navbar/>

      <Blogbanner/>

      <br/>  <br/> <br/>  <hr/>
      <div className='wrapper'>
     {blogdatas.map(add)} 
      </div>


      <br/>  <br/> <br/>
      <Footer/>
     </>
    );
  }
  export default blog ;