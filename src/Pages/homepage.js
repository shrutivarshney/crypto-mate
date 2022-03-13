import React from "react";
import Navbar from "../components/shared/Navbar/navbar";
import Footer from "../components/shared/Footer/footer";
import Api from "../components/homepage/api/api";
import Banner from "../components/homepage/Banner/banner";

const Homepage = () => {
   
    return (
        <section>
            <Navbar />
            <Banner />
            <Api />
            <Footer />
        </section>
    )
}

export default Homepage;