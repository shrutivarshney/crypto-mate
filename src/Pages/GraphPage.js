import Graph from "../components/Graph/Graph";

import React from "react";
import Navbar from "../components/shared/Navbar/navbar";
import Footer from "../components/shared/Footer/footer";

const GraphPage = () => {
  return (
    <>
      <Navbar />
      <Graph />
      <Footer />
    </>
  );
};

export default GraphPage;
