import { useNote } from "../../context/notes-context";
import { NoteCard, PinnedCard } from "../../components";
import { useState, useEffect,useRef } from "react";


const Notes = ({editNote, setEditNote ,setCreateNoteModalVisible}) => {
  const [pinnedNotes, setPinnedNotes] = useState([]);

  const {
    notesState: { notes },
    getAllNotesHandler,
  } = useNote();
 
  const tempAllNotesHandler = useRef();

  tempAllNotesHandler.current = getAllNotesHandler

  useEffect(() => {
    tempAllNotesHandler.current() ;
  }, []);

  return (
    <>
      <section className="all-notes-section">
        <h4 className="all-notes-heading">All Notes</h4>

        <div className="all-notes-container">
          {notes.map((note) => (
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
