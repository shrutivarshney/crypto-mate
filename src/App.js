import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GraphPage from "./Pages/GraphPage";
import Homepage from "./Pages/homepage";
import Videos from "./Pages/Videos";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Blogpage from "./Pages/Blogpage";
import { DepositPage } from "./Pages/DepositPage";
import { AuthProvider } from "./Pages/Auth";
import PrivateRoute from "./Pages/PrivateRoute";
import TnC from "./Pages/TnC";
import Privacy from "./Pages/Privacy";
import Layout from "./components/blog/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="App bg-[url('../public/bg.png')] bg-repeat font-poppins">
        <Routes>
          <Route path="/GraphPage" element={<GraphPage />} />
          <Route path="/Videos" element={<Videos />} />
          <Route path="/Blogs" element={<Blogpage />} />
          <Route path="/DepositPage" element={<DepositPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Blogs" element={<Blogpage />} />
          <Route path="/TnC" element={<TnC/>} />
          <Route path="/Privacy" element={<Privacy/>} />
          <Route path="/Layout" element={<Layout/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
