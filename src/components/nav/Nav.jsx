import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu} from "react-icons/gi"
import "./Nav.css"

const Nav = ()=>{
    return(
    
        <header className="header-container">
          <GiHamburgerMenu className="hamburger-menu x-lg-text" />
          <h2 className="header-title">Pine <span>Notes</span></h2>
          <form className="search-container">
            <input
              type="search"
              placeholder="Type to search"
              className="input-search"
            />
            <button type="submit" className="btn-search">
              <FaSearch />
            </button>
          </form>

          <nav className="nav-container">
            <ul className="nav-list md-text">
              <li className="list-inline-item">
                <a className="nav-icon-link link-no-style">
                  <span className="nav-icon lg-text">
                    <FaRegUser />
                  </span>
                  <span className="nav-icon-text md-text"> Hi! User </span>
                </a>
              </li>
              </ul>
              </nav>
              </header>
    )
}

export{Nav};