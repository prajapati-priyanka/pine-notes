import { FaSearch } from "react-icons/fa";
import { SideNav, NoteCard, CreateNote,Filter } from "../../components";
import "./Home.css";

const Home = () => {
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

        <section className="all-notes-section">
          <h4 className="all-notes-heading">All Notes</h4>
          <div className="all-notes-container">
            <NoteCard />
            <NoteCard />
            <NoteCard />
          </div>
        </section>
        <section className="all-notes-section">
          <h4 className="all-notes-heading">Pinned Notes</h4>
          <div className="all-notes-container">
            <NoteCard />
            <NoteCard />
            <NoteCard />
          </div>
        </section>
      </main>
    </div>
  );
};

export { Home };
