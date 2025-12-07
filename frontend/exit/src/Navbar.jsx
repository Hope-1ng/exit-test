import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-inner">
        
        

        <button className="nav-toggle" onClick={toggleMenu}>
          <span className="hamburger"></span>
        </button>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          
          <NavLink 
            to="/" 
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>

          <NavLink 
            to="/feedback" 
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            feedback
          </NavLink>

          

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
