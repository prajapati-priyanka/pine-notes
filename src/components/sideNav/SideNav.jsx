import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsLightbulb, BsTrash } from "react-icons/bs";
import { MdOutlineModeEditOutline, MdOutlineArchive } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import "./SideNav.css";
import { EditLable } from "../modal/editLabel/EditLabel";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import toast from "react-hot-toast";

const SideNav = () => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const [labelModalVisible, setLabelModalVisible] = useState(false);
  const [sideNavShrinked, setSideNavShrinked] = useState(false);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    authDispatch({ type: "LOGOUT" });
    toast("You have been successfully logged out", { icon: "✔️" });
    navigate("/");
  };

  const getActiveLinkStyle= ({isActive})=>({
    color: isActive ? "#0693e3" : "",
  })

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

        <h3 className="header-title">
          Pine <span>Notes</span>
        </h3>
      </div>

      <div className="nav-list">
        <NavLink to="/home" className="side-nav-link" style={getActiveLinkStyle}>
    
          <span><BsLightbulb className="nav-list-icons" title="Bulb" /></span>
          <span className="links-name">Notes</span>
        
        </NavLink>
       
        <NavLink to="/home"
          onClick={() => setLabelModalVisible(true)}
          className="side-nav-link"
        
        >
         <span><MdOutlineModeEditOutline className="nav-list-icons" title="Edit" /></span> 
          <span className="links-name">Edit Labels</span>
          </NavLink>

        <NavLink to="/archive" className="side-nav-link" style={getActiveLinkStyle}>
          <span><MdOutlineArchive className="nav-list-icons" title="Archive" />
            </span>
          <span className="links-name">Archive</span>
        </NavLink>

        <NavLink to="/trash" className="side-nav-link" style={getActiveLinkStyle}>
        <span> <BsTrash className="nav-list-icons" title="Trash" /></span>
         
          <span className="links-name">Trash</span>
       
        </NavLink>
       
        <NavLink to = "/" className="side-nav-link" onClick={logoutHandler} style={getActiveLinkStyle}>
          <span><IoMdLogOut className="nav-list-icons" title="Logout" /></span>
          <span className="links-name">Logout</span>
        </NavLink>
      </div>
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
