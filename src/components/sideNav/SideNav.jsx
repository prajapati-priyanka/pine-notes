import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsLightbulb, BsTrash } from "react-icons/bs";
import { MdOutlineModeEditOutline, MdOutlineArchive } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import "./SideNav.css";
import { EditLable } from "../modal/editLabel/EditLabel";
import { useNavigate } from "react-router-dom";
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
          Pine <span style={{ color: "blue" }}>Notes</span>
        </h3>
      </div>

      <ul className="nav-list">
        <li className="side-nav-link">
          <BsLightbulb className="nav-list-icons" title="Bulb" />
          <span className="links-name">Notes</span>
        </li>
        <li
          onClick={() => setLabelModalVisible(true)}
          className="side-nav-link"
        >
          <MdOutlineModeEditOutline className="nav-list-icons" title="Edit" />
          <span className="links-name">Edit Labels</span>
        </li>
        <li className="side-nav-link">
          <MdOutlineArchive className="nav-list-icons" title="Archive" />
          <span className="links-name">Archive</span>
        </li>
        <li className="side-nav-link">
          <BsTrash className="nav-list-icons" title="Trash" />
          <span className="links-name">Trash</span>
        </li>
        <li className="side-nav-link" onClick={logoutHandler}>
          <IoMdLogOut className="nav-list-icons" title="Logout" />
          <span className="links-name">Logout</span>
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
