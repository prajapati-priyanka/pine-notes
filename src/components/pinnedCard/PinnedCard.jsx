import { BsPinFill, BsTrash } from "react-icons/bs";
import { MdOutlineModeEditOutline, MdOutlineArchive } from "react-icons/md";


import "../noteCard/NoteCard.css";

const PinnedCard = ({notes}) => {
    const {title, content,tags,color,priority} = notes;

    const [label] = tags;
    
    const date = new Date().toLocaleDateString();

  return (
    <div className="card notes-card card-with-dismiss" style={{backgroundColor: color}}>
      <div className="card-header">
        <div className="card-left">
          <h5 className="card-title lg-text">{title}</h5>
          <p className="card-text">
          {content}
          </p>
        </div>
        <div className="card-right">
          <button className="close-icon">
           <BsPinFill />
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

export { PinnedCard };
