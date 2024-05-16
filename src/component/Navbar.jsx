// import React, { useState } from "react";
// import "../cssStyling/navbar.css";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <section className="outer-section">
//             <nav>
//                 <label className="logo">YOGA</label>
//                 <div className="menu-icon" onClick={toggleMenu}>
//                     <div className={isOpen ? "line line1 rotate-down" : "line"}></div>
//                     <div className={isOpen ? "line line2 fade-out" : "line"}></div>
//                     <div className={isOpen ? "line line3 rotate-up" : "line"}></div>
//                 </div>
//                 <ul className={isOpen ? "nav-links active" : "nav-links"}>
//                     <li><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
//                     <li><NavLink to="/courses" onClick={toggleMenu}>Courses</NavLink></li>
//                     <li><NavLink to="/mycourses" onClick={toggleMenu}>myCourses</NavLink></li>
//                     <li><NavLink to="/login" onClick={toggleMenu}>Login/Sign-Up</NavLink></li>
//                 </ul>
//             </nav>
//         </section>
//     );
// };

// export default Navbar;










import "../cssStyling/navbar.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi'; // Import the hamburger menu icon

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <section className="outer-section">
            <nav>
                <label className="logo">YOGA</label>
                <div className="hamburger-menu" onClick={toggleMobileMenu}>
                    <GiHamburgerMenu />
                </div>
                {/* Original menu links shown when width > 660px */}
                <ul className="nb-menu-links">
                    <li><NavLink to="/" style={({ isActive }) => ({color: isActive ? "orange" : "white"})}>Home</NavLink></li>
                    <li><NavLink to="/courses" style={({ isActive }) => ({color: isActive ? "orange" : "white"})}>Courses</NavLink></li>
                    <li><NavLink to="/mycourses" style={({ isActive }) => ({color: isActive ? "orange" : "white"})}>myCourses</NavLink></li>
                    <li><NavLink to="/login" style={({ isActive }) => ({color: isActive ? "orange" : "white"})}>SignUp</NavLink></li>
                </ul>
                {/* Mobile menu shown when width <= 660px */}
                {showMobileMenu && (
                    <ul className="mobile-menu-links">
                        <li><NavLink to="/" style={({ isActive }) => ({color: isActive ? "orange" : "white"})}>Home</NavLink></li>
                        <li><NavLink to="/courses" style={({ isActive }) => ({color: isActive ? "orange" : "white"})}>Courses</NavLink></li>
                        <li><NavLink to="/mycourses" style={({ isActive }) => ({color: isActive ? "orange" : "white"})}>myCourses</NavLink></li>
                        <li><NavLink to="/login" style={({ isActive }) => ({color: isActive ? "orange" : "white"})}>SignUp</NavLink></li>
                    </ul>
                )}
            </nav>
        </section>
    );
};

export default Navbar;

