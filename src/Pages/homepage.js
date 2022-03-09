import React from "react";
import Navbar from "../components/shared/Navbar/navbar";
import Footer from "../components/shared/Footer/footer";
import Api from "../components/homepage/api/api";

const Homepage = () => {
   
    return (
        <section>
            <Navbar />
            <Api />
            <Footer />
        </section>
    )
}

export default Homepage;