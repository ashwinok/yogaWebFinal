import React from "react";
import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Number of slides to show
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3, // Adjust number of slides for tablets
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2, // Adjust number of slides for smaller tablets and mobiles
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, // Adjust number of slides for mobiles
                }
            }
        ]
    };

    return (
        <section className="p-4">
            <h1 className="text-2xl font-bold mb-4">Recommended Courses for You</h1>
            <div className="carousel-container">
                <Slider {...settings}>
                    {Sdata.map((d, index) => (
                        <div key={index} className="carousel-card-container">
                            <div className="bg-white rounded-lg shadow-md">
                                <img src={d.source} alt="pic" className="w-full h-auto" />
                                <div className="p-4">
                                    <h5 className="text-lg font-bold mb-2">{d.title}</h5>
                                    <p className="mb-2 overflow-y-auto max-h-36">{d.description}</p>
                                    <p className="font-bold text-red-600 mb-2">{d.price}</p>
                                    <a href="hh" className="block bg-black text-white py-2 px-4 rounded-lg text-center transition duration-300 ease-in-out hover:bg-red-600">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Carousel;




// import React from "react";
// import Sdata from "./Sdata";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
//  import "slick-carousel/slick/slick-theme.css";
//  import "../cssStyling/carousel.css"


// const Carousel = () => {
//     var settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//       };
//     return (
//         <section >
//         <h1 className="car-heading">Recommended Courses for You</h1>
//         <div className="carousel-container">
//             <div>
//                 <Slider {...settings}>
//                     {Sdata.map((d) => (
//                         <div className="carousel-card-container">
//                             <div className="card">
//                                 <img src={d.source} alt="pic" className="card-image"/>
//                                 <div className="card-body">
//                                     <h5 className="card-title">{d.title}</h5>
//                                     <p className="card-description">{d.description}</p>
//                                     <p className="card-price">{d.price}</p>
//                                     <a href="hh" className="buy-now-link">Buy Now</a>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>    
//             </div>
//         </div>
//         </section>
//     )
// }
// export default Carousel;