import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import "../cssStyling/editedfooter.css"

const EditedFooter = () => {
    return (
        <>
            <div className="efooterContainer">
                <div className="efooterIcons">
                    <InstagramIcon/>
                    <FacebookIcon/>
                    <XIcon/>
                    <YouTubeIcon/>
                    <LinkedInIcon/>
                </div>
                <div className="efooterNav">
                    <ul>
                        <li><a href="-">About</a></li>
                        <li><a href="-">Contact Us</a></li>
                        <li><a href="-">Our Team</a></li>
                        <li><a href="-">News</a></li>
                    </ul>
                </div>
                <div className="efooterBottom">
                    <p> &copy; Copyright <span> pata nahi kya likhu yaha</span> </p>
                </div>
            </div>
        </>
    )
}

export default EditedFooter;
