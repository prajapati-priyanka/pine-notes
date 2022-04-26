import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsLightbulb,BsTrash } from "react-icons/bs";
import { MdOutlineModeEditOutline, MdOutlineArchive } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import "./SideNav.css";
import { EditLable } from "../modal/EditLabel";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [labelModalVisible, setLabelModalVisible] = useState(false);
  const [sideNavShrinked, setSideNavShrinked] = useState(false);
  return (
    <nav className={`side-nav ${sideNavShrinked ? "shrinked" : ""}`}>
      <div className="logo-content">
        <button
          className="hamburger-menu lg-text"
          onClick={() =>
            setSideNavShrinked((sideNavShrinked) => !sideNavShrinked)
          }
        >
          <GiHamburgerMenu />
        </button>
        <Link to="/">
        <h3 className="header-title">
          Pine <span style={{ color: "blue" }}>Notes</span>
        </h3>
        </Link>
        
      </div>

      <ul className="nav-list">
        <li>
          <Link to="/home" className="side-nav-link">
            <BsLightbulb className="nav-list-icons" title="Bulb" />
            <span className="links-name">Notes</span>
          </Link>
        </li>
        <li onClick={() => setLabelModalVisible(true)}>
          <Link to="/home" className="side-nav-link">
            <MdOutlineModeEditOutline className="nav-list-icons" title="Edit" />
            <span className="links-name">Edit Labels</span>
          </Link>
        </li>
        <li>
          <Link to="/home" className="side-nav-link">
            <MdOutlineArchive className="nav-list-icons" title="Archive" />
            <span className="links-name">Archive</span>
          </Link>
        </li>
        <li>
          <Link to="/home" className="side-nav-link">
            <BsTrash className="nav-list-icons" title="Trash" />
            <span className="links-name">Trash</span>
          </Link>
        </li>
        <li>
          <Link to="/home" className="side-nav-link">
            <IoMdLogOut className="nav-list-icons" title="Logout" />
            <span className="links-name">Logout</span>
          </Link>
        </li>
      </ul>
      {labelModalVisible ? (
        <EditLable
          labelModalVisible={labelModalVisible}
          setLabelModalVisible={setLabelModalVisible}
        />
      ) : null}
    </nav>
  );
};
export { SideNav };
