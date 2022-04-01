import React from "react"
import Navbar from "../components/shared/Navbar/navbar";
import Footer from "../components/shared/Footer/footer";
import Api from "../components/homepage/api/api";

const marketPage = () => {

    return (
        <section>
            <Navbar />
            <Api />
            <Footer />
        </section>
    )
}

export default marketPage;