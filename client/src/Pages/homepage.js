import React from "react";
import Navbar from "../components/shared/Navbar/navbar";
import Cards from "../components/homepage/Cards/card"
import Footer from "../components/shared/Footer/footer";

const Homepage = () => {
    return(
        <div>
            <Navbar />
            <Cards />
            <Footer />
        </div>
    )
}

export default Homepage;