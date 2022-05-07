import { FaSearch } from "react-icons/fa";
import { SideNav, CreateNoteModal, Filter } from "../../components";
import { useState } from "react";
import "./Home.css";
import { useNote } from "../../context/notes-context";
import { useEffect } from "react";
import { Notes } from "../notes/Notes";

const Home = () => {
  const [createNoteModalVisible, setCreateNoteModalVisible] = useState(false);

  const { getNotesData } = useNote();

  useEffect(() => {
    getNotesData();
  }, [getNotesData]);

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
          <button
            className="btn btn-primary"
            onClick={() => setCreateNoteModalVisible(true)}
          >
            Create Note
          </button>
        </section>

        <section className="notes-header">
          <h2 className="notes-heading">Notes</h2>
        </section>

        <Notes />
      </main>

      {createNoteModalVisible ? (
        <section className="add-note-section">
          <CreateNoteModal
            setCreateNoteModalVisible={setCreateNoteModalVisible}
            createNoteModalVisible={createNoteModalVisible}
          />
        </section>
      ) : null}
    </div>
  );
};

export { Home };
