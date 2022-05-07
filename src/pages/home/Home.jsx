import { FaSearch } from "react-icons/fa";
import { SideNav, CreateNote, Filter } from "../../components";
import "./Home.css";

import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useNote } from "../../context/notes-context";
import { useEffect } from "react";

const Home = () => {

  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {getNotesData} = useNote();

useEffect(()=>{
  if(pathname === "/home"){
    navigate("/home/notes")
  }
  
},[pathname,navigate])

  useEffect(()=>{
    getNotesData();
   
  },[getNotesData]);

  const getPageTitle = (pathname)=>{
    switch (pathname) {
      case "/home/notes":
        return "Notes"
      case "/home/trash":
        return "Trash"
      case "/home/archieve":
        return "Archieve"
      default:
        return "Notes"
    }
  }
  

  return (
    <div className="main-container">
      <SideNav />
      <main className="main-content">
        <section className="search-filter-container">
          <div className="search-container">
            <button type="submit" className="btn-search">
              <FaSearch />
            </button>
            <input
              type="search"
              placeholder="Type to search"
              className="input-search"
            />
          </div>
          <Filter />
        </section>

        <section className="add-note-section">
          <CreateNote />
        </section>
        <section className="notes-header">
          <h2 className="notes-heading">{getPageTitle(pathname)}</h2>
        </section>

        <Outlet />
      </main>
    </div>
  );
};

export { Home };
