import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsLightbulb } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdOutlineArchive} from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import "./SideNav.css";

const SideNav = () => {
    const [sideNavShrinked, setSideNavShrinked] = useState(false);
  return (
    <nav className={`side-nav ${
        sideNavShrinked ? "shrinked" : ""
      }`}>
      <div className="logo-content">
          <button className="hamburger-menu lg-text" onClick={()=>setSideNavShrinked(sideNavShrinked=> !sideNavShrinked)}>
          <GiHamburgerMenu />
          </button>
        
        <h3 className="header-title">
          Pine <span style={{ color: "blue" }}>Notes</span>
        </h3>
      </div>

      <ul className="nav-list">
        <li>
          <a href="#">
            <BsLightbulb className="nav-list-icons" title="Bulb"/>
            <span className="links-name">Notes</span>
          </a>
        </li>
        <li>
          <a href="#">
            <MdOutlineModeEditOutline className="nav-list-icons" title="Edit" />
            <span className="links-name">Edit Labels</span>
          </a>
        </li>
        <li>
          <a href="#">
            <MdOutlineArchive className="nav-list-icons" title="Archive" />
            <span className="links-name">Archive</span>
          </a>
        </li>
        <li>
          <a href="#">
            <BsTrash className="nav-list-icons" title="Trash" />
            <span className="links-name">Trash</span>
          </a>
        </li>
        <li>
          <a href="#">
            <IoMdLogOut className="nav-list-icons" title="Logout" />
            <span className="links-name">Logout</span>
          </a>
        </li>
      </ul>
    </nav>

   
  );
};
export { SideNav };
