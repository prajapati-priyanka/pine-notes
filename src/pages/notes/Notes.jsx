import { NoteCard, PinnedCard } from "../../components";
import { useState, useEffect} from "react";
import { useNote, useFilter, useAuth } from "../../context";
import { getFilteredData} from "../../helpers/filterHelpers";
import { getAllNotesHandler } from "../../helpers/utils/getAllNotesHandler";


const Notes = ({editNote, setEditNote ,setCreateNoteModalVisible}) => {
  
  const [pinnedNotes, setPinnedNotes] = useState([]);

  const {
    notesState: { notes }, notesDispatch
  } = useNote();

  const {authState} = useAuth();

  const token = authState.token || localStorage.getItem("token")
  
  const {filterState} = useFilter();
 
  // const tempAllNotesHandler = useRef();

  // tempAllNotesHandler.current = getAllNotesHandler

  useEffect(() => {
    getAllNotesHandler(token, notesDispatch) ;
  }, []);

  const filteredData = getFilteredData(notes,filterState);

  return (
    <>
      <section className="all-notes-section">
        <h4 className="all-notes-heading">All Notes</h4>

        <div className="all-notes-container">
          {filteredData.map((note) => (
            <NoteCard
              key={note._id}
              notes={note}
              pinnedNotes={pinnedNotes}
              setPinnedNotes={setPinnedNotes}
              setEditNote={setEditNote}
              editNote={editNote}
              setCreateNoteModalVisible={setCreateNoteModalVisible}
            />
          ))}
        </div>
      </section>

      <section className="all-notes-section">
        <h4 className="all-notes-heading">Pinned Notes</h4>

        <div className="all-notes-container">
          {pinnedNotes.map((note) => (
            <PinnedCard key={note._id} notes={note} />
          ))}
        </div>
      </section>
    </>
  );
};

export { Notes };
