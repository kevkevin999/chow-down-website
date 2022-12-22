import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    return (
        <div className="Navbar">
            <button id="search-button">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-2x" />
            </button>
            <button id="profile-button">
                <FontAwesomeIcon icon={faUser} className="fa-2x" />
            </button>
        </div>
    );
}

export default Navbar;