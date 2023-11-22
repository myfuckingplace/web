import instagramIcon from "../../images/instagram.png";
import React from "react";

export const InstagramLogo = () => {
    const instagramUrl = 'https://www.instagram.com/myfuckingplace/';
    return (
        <>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" style={{width: '30px', height: '30px'}}/>
            </a>
        </>
    )
}
