// Navbar.js
import { useRef, useState } from "react";
// import { FaBars } from "react-icons/fa";
import { AiTwotoneContacts } from "react-icons/ai";
import "../assets/navbar.css";
// import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from '../assets/images/Logo1.jpg';

function Navbar() {
    const navRef = useRef();
    const [showMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div>                   
            <header>
            <img className="navbar-logo" src={logo} alt="Logo" />              
                <nav ref={navRef} className={showMenu ? "responsive_nav" : ""}>
                    <a className="navbar" href="/Home">Home</a>
                    <a className="navbar" ><Link to='/Service'>Services</ Link></a>
                    {/* href="/Services" */}
                    <a className="navbar" href="/Gallery">Gallery</a>
                    <a className="navbar" href="/About">About Us</a>
                </nav>
                <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    <button className="dropbtn">
                        <AiTwotoneContacts style={{ fontSize: "40px" }} />
                    </button>
                    {showDropdown && (
                        <div className="dropdown-content">
                            <Link to='/Profile'>Profile</Link>
                            <Link to='/SignUp'>Logout</Link>
                            
                        </div>
                    )}

                </div>

                
                
                
            </header>
        </div>
    );
}

export default Navbar;
