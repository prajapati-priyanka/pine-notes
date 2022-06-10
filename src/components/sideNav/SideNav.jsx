import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsLightbulb, BsTrash } from "react-icons/bs";
import {
  MdOutlineModeEditOutline,
  MdOutlineArchive,
  MdLabelOutline,
} from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import "./SideNav.css";
import { EditLable } from "../modal/editLabel/EditLabel";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { toast } from "react-toastify";
import { useLabels } from "../../context/labels-context";
import { convertStringFirstLetterCapital } from "../../helpers/notesHelpers";

const SideNav = ({ sideNavShrinked, setSideNavShrinked }) => {
  const { authDispatch } = useAuth();
  const navigate = useNavigate();
  const { labelsState } = useLabels();
  const [labelModalVisible, setLabelModalVisible] = useState(false);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    authDispatch({ type: "LOGOUT" });
    toast.success("You have been successfully logged out");
    navigate("/");
  };

  const getActiveLinkStyle = ({ isActive }) => ({
    color: isActive ? "#0693e3" : "",
  });

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

        <Link to="/" className="header-title">
          Pine <span>Notes</span>
        </Link>
      </div>

      <div className="nav-list">
        <NavLink
          to="/home"
          className="side-nav-link"
          style={getActiveLinkStyle}
        >
          <span>
            <BsLightbulb className="nav-list-icons" title="Bulb" />
          </span>
          <span className="links-name">Notes</span>
        </NavLink>

        {labelsState.labels.map((label, index) => (
          <NavLink to="/home" key={index} className="side-nav-link">
            <span>
              <MdLabelOutline className="nav-list-icons" />
            </span>
            <span className="links-name">
              {convertStringFirstLetterCapital(label)}
            </span>
          </NavLink>
        ))}

        <div
          className="label-edit side-nav-link"
          onClick={() => setLabelModalVisible(true)}
        >
          <span>
            <MdOutlineModeEditOutline className="nav-list-icons" title="Edit" />
          </span>
          <span className="links-name">Edit Labels</span>
        </div>

        <NavLink
          to="/archive"
          className="side-nav-link"
          style={getActiveLinkStyle}
        >
          <span>
            <MdOutlineArchive className="nav-list-icons" title="Archive" />
          </span>
          <span className="links-name">Archive</span>
        </NavLink>

        <NavLink
          to="/trash"
          className="side-nav-link"
          style={getActiveLinkStyle}
        >
          <span>
            {" "}
            <BsTrash className="nav-list-icons" title="Trash" />
          </span>

          <span className="links-name">Trash</span>
        </NavLink>

        <NavLink
          to="/"
          className="side-nav-link"
          onClick={logoutHandler}
          style={getActiveLinkStyle}
        >
          <span>
            <IoMdLogOut className="nav-list-icons" title="Logout" />
          </span>
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
