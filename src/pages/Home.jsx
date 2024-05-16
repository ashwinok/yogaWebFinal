import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import HomeHeader from "../component/HomeHeader";
import Whyy from "../component/Whyy";
// import MoveWords from "../component/MoveWords";
import Carousel from "../component/Carousel";
import "../cssStyling/home.css"


const Home = () => {
    return (
        <>
            <Navbar/>
            <HomeHeader/>
            {/* <MoveWords/> */}
            <Whyy/>
            <div className="max-w-[95vw] mx-auto">
            <Carousel/>
            </div>            
            <Footer/>
        </>
    )
}

export default Home;