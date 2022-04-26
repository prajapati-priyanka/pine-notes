import { BsPin, BsTrash } from "react-icons/bs";
import { MdOutlineModeEditOutline, MdOutlineArchive } from "react-icons/md";
import "./NoteCard.css";

const NoteCard = () => {
  return (
    <div className="card notes-card card-with-dismiss">
      <div className="card-header">
        <div className="card-left">
          <h5 className="card-title lg-text">Title</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, ad.
            Tempore perspiciatis rerum atque labore soluta, similique doloremque
            eaque, asperiores ipsa sit commodi aliquid minima, assumenda neque
            deserunt architecto error?
          </p>
        </div>
        <div className="card-right">
          <button className="close-icon">
            <BsPin />
          </button>
        </div>
      </div>
      <div className="note-footer">
        <p className="note-date">Created on 02/04/2020 </p>
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
