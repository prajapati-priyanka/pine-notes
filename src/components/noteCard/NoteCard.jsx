import { BsPin, BsPinFill, BsTrash } from "react-icons/bs";
import {
  MdOutlineModeEditOutline,
  MdOutlineArchive,
  MdRestoreFromTrash,
  MdOutlineUnarchive
} from "react-icons/md";
import { useState } from "react";
import "./NoteCard.css";
import toast from "react-hot-toast";
import { EditNoteModal } from "../modal/editNoteModal/EditNoteModal";
import { useLocation } from "react-router-dom";
import { useTrash } from "../../context/trash-context";
import { useArchive } from "../../context/archive-context";

const NoteCard = ({ notes, pinnedNotes, setPinnedNotes }) => {
  const [isPinned, setIsPinned] = useState(false);
  const [editNoteVisible, setEditNoteVisible] = useState(false);
  const location = useLocation();
  const {
    moveToTrashHandler,
    restoreFromTrashHandler,
    deleteFromTrashHandler,
  } = useTrash();
 
  const {
    moveToArchiveHandler,
    restoreFromArchiveHandler,
    deleteFromArchiveHandler
     } = useArchive();

  const { title, content, tags, color, priority } = notes;

  const [label] = tags;

  const date = new Date().toLocaleDateString();

  const addPinnedNotes = (note) => {
    const newNote = pinnedNotes.find((item) => item._id === note._id);

    if (newNote === undefined) {
      setIsPinned(!isPinned);
      setPinnedNotes((prevData) => [...prevData, note]);
      toast("Note Pinned");
    }
  };

  const removePinnedNotes = (note) => {
    const newPinnedNote = pinnedNotes.filter(
      (pinnedNote) => pinnedNote._id !== note._id
    );

    setPinnedNotes(newPinnedNote);
    setIsPinned(!isPinned);
    toast("Note Unpinned");
  };

  const moveToTrash = (notes) => {
  
    if (location.pathname === "/home") {
      moveToTrashHandler(notes);
    }
    if (location.pathname === "/trash") {
      deleteFromTrashHandler(notes);
    }
    if (location.pathname === "/archive"){
      deleteFromArchiveHandler(notes);
    }
   
  };
 

 

  return (
    <>
      <div
        className="card notes-card card-with-dismiss"
        style={{ backgroundColor: color }}
      >
        <div className="card-header">
          <div className="card-left">
            <h5 className="card-title lg-text">{title}</h5>
            <p className="card-text">{content}</p>
          </div>
          <div className="card-right">
            <button className="close-icon">
              {isPinned ? (
                <BsPinFill
                  title="Pinned Notes"
                  onClick={() => removePinnedNotes(notes)}
                />
              ) : (
                <BsPin
                  title="UnPinned Notes"
                  onClick={() => addPinnedNotes(notes)}
                />
              )}
            </button>
          </div>
        </div>
        <div className="notes-label-priority md-text">
          <div className="notes-features">{label}</div>
          <div className="notes-features">{priority}</div>
        </div>
        <div className="note-footer">
          <p className="note-date">Created on {date} </p>
          <div className="note-action-btns">

        
            <button
              className="action-btn"
              title="delete"
              onClick={() => moveToTrash(notes)}
            >
              <BsTrash />
            </button>
             

            {location.pathname === "/home"  ? (<>
              <button
                className="action-btn"
                onClick={(e) => setEditNoteVisible(true)}
              >
                <MdOutlineModeEditOutline />
              </button>

           <button className="action-btn" title="archive" onClick={()=> moveToArchiveHandler(notes)}>
            <MdOutlineArchive />
            </button>
            </>
            ): null }

            {location.pathname === "/trash" &&  (
              <button
                className="action-btn"
                title="restore"
                onClick={() => restoreFromTrashHandler(notes)}
              >
                <MdRestoreFromTrash />
              </button>
            ) 
          
            }

            {location.pathname === "/archive" && (
              <button className="action-btn" title="unarchive" onClick={()=>restoreFromArchiveHandler(notes)}>
                 <MdOutlineUnarchive/>
                 </button>
            )}
          </div>
        </div>
      </div>
      {editNoteVisible ? (
        <EditNoteModal note={notes} setEditNoteVisible={setEditNoteVisible} />
      ) : null}
    </>
  );
};

export { NoteCard };
