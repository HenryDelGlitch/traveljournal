import React from 'react';
import Earth from "../../images/earth.svg";

export default function Navbar() {
    return (
        <div className='navbar'>
            <img src={Earth} alt="earth"/>
            <p>my travel journal.</p>
        </div>
    );
}