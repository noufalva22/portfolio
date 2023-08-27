import React from 'react'
import './Navbar.scss'
const Navbar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">
                    Naufal
                    {/* <span>toggle</span> */}
                </div>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <li>Home</li>
                        <li>About me</li>
                        <li>Projects</li>
                    </ul>
                </div>
                <button className="button n-button">
                    Contact
                </button>
            </div>
        </div>
    )
}

export default Navbar