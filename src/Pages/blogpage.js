import React from 'react'
import Blog from "../components/Learn/blog/blog"
import Footer from '../components/shared/Footer/footer';
import Navbar from '../components/shared/Navbar/navbar';

function blogpage() {
  return (
    <div >
      <Navbar />
      <Blog/>
      <Footer />
    </div>
  );
};

export default blogpage