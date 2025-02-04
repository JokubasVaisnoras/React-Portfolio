import React from "react";
import './mobile.css'
function Mobile({ isOpen, setIsOpen}) {
  return (
  <div className="mobile">
    <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
      <i className="fi-rr-cross-circle"></i>
    </div>
    <div className="mobile-option" onClick={() => setIsOpen(!isOpen)}>
    <a href="#projects" >
          <i className="fi-rr-edit-alt option-icon"></i>Experience
        </a>
    </div>
    <div className="mobile-option" onClick={() => setIsOpen(!isOpen)}>
        <a href="#skills">
        <i className="fi-rr-laptop option-icon"></i>Skills
        </a>
    </div>
    {/* <div className="mobile-option">
        <a href="#work">
        <i className="fi-rr-briefcase option-icon"></i>Work
        </a>
    </div> */}
    <div className="mobile-option" onClick={() => setIsOpen(!isOpen)}>
        <a href="#contact">
        <i className="fi fi-rr-user option-icon"></i>Contact
        </a>
    </div>
  </div>
  );
}

export default Mobile;