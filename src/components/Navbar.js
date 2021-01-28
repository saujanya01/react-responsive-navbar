import React from "react";
import ToggleButton from "./ToggleButton";
import NavbarLinks from "./NavbarLinks";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="brand-title">Brand Name</div>
            <ToggleButton/>
            <NavbarLinks/>
        </nav>
    )
}

export default Navbar;