import { FaSearch } from "react-icons/fa";
import { SideNav, CreateNoteModal, Filter } from "../../components";
import { useState } from "react";
import "./Home.css";
import { useNote,useAuth, useFilter } from "../../context";
import { useEffect } from "react";
import { Notes } from "../notes/Notes";
import { getAllNotesHandler } from "../../helpers/utils/getAllNotesHandler";

const Home = () => {
  const [createNoteModalVisible, setCreateNoteModalVisible] = useState(false);
  const [editNote, setEditNote] = useState(null)
const {notesState:{notes}, notesDispatch} = useNote()
  const {authState} = useAuth();
  
  const {filterState : {searchValue}, filterDispatch} = useFilter()

  const token = authState.token || localStorage.getItem("token")

  useEffect(() => {
    getAllNotesHandler(token, notesDispatch);
  }, []);


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
              value={searchValue}
              onChange={(e)=>filterDispatch({type:"SET_SEARCH_VALUE", payload: e.target.value})}
            />
          </div>
          <Filter />
        </section>
        <section className="add-note-section text-center">
          <button
            className="btn btn-primary md-text create-note-btn"
            onClick={() => setCreateNoteModalVisible(true)}
          >
            CREATE NOTE
          </button>
        </section>

        <section className="notes-header">
          <h2 className="notes-heading">Notes</h2>
        </section>

        <Notes setCreateNoteModalVisible={setCreateNoteModalVisible} editNote={editNote} setEditNote={setEditNote} />
      </main>

      {createNoteModalVisible ? (
        <section className="add-note-section">
          <CreateNoteModal
            setCreateNoteModalVisible={setCreateNoteModalVisible}
            createNoteModalVisible={createNoteModalVisible}
            setEditNote={setEditNote}
            editNote={editNote}
          />
        </section>
      ) : null}
    </div>
  );
};

export { Home };
