import { BsPin, BsTrash } from "react-icons/bs";
import { MdOutlineModeEditOutline, MdOutlineArchive } from "react-icons/md";

import "./NoteCard.css";

const NoteCard = ({notes}) => {

console.log("In notesCard", notes)
const {title, content} = notes;

const date = new Date().toLocaleDateString();

  return (
    <div className="card notes-card card-with-dismiss">
      <div className="card-header">
        <div className="card-left">
          <h5 className="card-title lg-text">{title}</h5>
          <p className="card-text">
          {content}
          </p>
        </div>
        <div className="card-right">
          <button className="close-icon">
            <BsPin />
          </button>
        </div>
      </div>
      <div className="note-footer">
        <p className="note-date">Created on {date} </p>
        <div className="note-action-btns">
          <button className="action-btn">
            <BsTrash />
          </button>
          <button className="action-btn">
            <MdOutlineModeEditOutline />
          </button>
          <button className="action-btn">
            <MdOutlineArchive />
          </button>
        </div>
      </div>
    </div>
  );
};

export { NoteCard };
