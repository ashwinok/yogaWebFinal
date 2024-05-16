// import React from "react";

// const Card = (props) => {
//     return (
//       <div className="bg-antiquewhite rounded-lg border border-gray-300 shadow-md p-6">
//         <div className="overflow-hidden rounded-lg border border-gray-300">
//           <img src={props.source} className="w-full h-auto" alt="..." />
//           <div className="p-6">
//             <h5 className="text-lg font-bold mb-2">{props.title}</h5>
//             <p className="h-36 overflow-y-auto mb-4">{props.description}</p>
//             <p className="font-bold text-red-600 mb-4">only at {props.price}</p>
//             <a href="hhhh" className="block text-center bg-black text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-red-600">
//               Buy Now
//             </a>
//           </div>
//         </div>
//       </div>
//     )
// }

// export default Card;






import React from "react";
import "../cssStyling/card.css"
const Card = (props) => {
    return (
      <div className="card-container">    
        <div className="card"> 
          <img src={props.source} className="card-image" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-description">{props.description}</p>            
            <p className="card-price">only at {props.price}</p>            
            <a href="hhhh" className="buy-now-link ">Buy Now</a>
          </div>
        </div>
      </div>
       
    )
}

export default Card;