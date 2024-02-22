// Navbar.js
import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiTwotoneContacts } from "react-icons/ai";
import "../assets/navbar.css";
// import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar() {
    const navRef = useRef();
    const [showMenu, setShowMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div>                   
            <header>
            <button className="buttonA" onClick={toggleMenu}>
                    <FaBars />
                </button>
                
                <nav ref={navRef} className={showMenu ? "responsive_nav" : ""}>
                    <a className="navbar" href="/Home">Home</a>
                    <a className="navbar" href="/Achievements">Achievements</a>
                    <a className="navbar" href="/Courses">Courses</a>
                    <a className="navbar" href="/Admissions">Admissions</a>
                    <a className="navbar" href="/Classes">Classes</a>
                </nav>
                <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    <button className="dropbtn">
                        <AiTwotoneContacts style={{ fontSize: "40px" }} />
                    </button>
                    {showDropdown && (
                        <div className="dropdown-content">
                            <a href="#">Profile</a>
                            <Link to='/SignUp'>Logout</Link>
                            
                        </div>
                    )}

                </div>

                
                
                
            </header>
        </div>
    );
}

export default Navbar;
