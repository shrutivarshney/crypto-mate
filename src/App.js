import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GraphPage from "./Pages/GraphPage";
import Homepage from "./Pages/homepage";
import Videos from "./Pages/Videos";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Blogpage from "./Pages/Blogpage";
import TnC from "./Pages/TnC";
import Privacy from "./Pages/Privacy";
import Layout from "./components/blog/Layout";
import Market from "./Pages/marketPage"

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-[url('../public/bg.png')] bg-repeat font-poppins">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/GraphPage" element={<GraphPage />} />
          <Route path="/Videos" element={<Videos />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Blogs" element={<Blogpage />} />
          <Route path="/TnC" element={<TnC/>} />
          <Route path="/Privacy" element={<Privacy/>} />
          <Route path="/Layout" element={<Layout/>} />
          <Route path="/Market" element={<Market />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
