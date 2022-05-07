import { useState } from "react";
import { useNote } from "../../../context/notes-context";
import { MdOutlineColorLens } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import "../createNoteModal/CreateNoteModal.css";
import { ColorPallete } from "../../colorPallete/ColorPallete";

const EditNoteModal = ({ note, setEditNoteVisible }) => {
  const [colorList, setColorList] = useState("");

  const { editNote, isOpen, setIsOpen } = useNote();

  const initialNotesData = {
    ...note,
  };

  const [editNoteContent, setEditNoteContent] = useState(initialNotesData);

  const expandColorPallete = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <div className="modal-background">
        <div className="modal-container">
          <header className="modal-header">
            <h3>Edit Note</h3>
            <button
              className="close-icon"
              onClick={() => setEditNoteVisible(false)}
            >
              <IoClose />
            </button>
          </header>
          <form
            className="add-note-container"
            style={{ backgroundColor: editNoteContent.color }}
          >
            <input
              type="text"
              className="note-title"
              placeholder="Enter title.."
              name="title"
              value={editNoteContent.title}
              onChange={(e) =>
                setEditNoteContent((prevContent) => ({
                  ...prevContent,
                  title: e.target.value,
                }))
              }
            />
            <textarea
              id="note-desc"
              cols="10"
              rows="10"
              className="note-content"
              placeholder="Enter content.."
              name="content"
              value={editNoteContent.content}
              onChange={(e) =>
                setEditNoteContent((prevContent) => ({
                  ...prevContent,
                  content: e.target.value,
                }))
              }
            />
            <div className="add-note-footer">
              <div className="note-select">
                <label htmlFor="note-label" className="label md-text">
                  Label:
                </label>
                <select
                  id="note-label"
                  className="select"
                  name="label"
                  value={editNoteContent.value}
                  onChange={(e) =>
                    setEditNoteContent((prevContent) => ({
                      ...prevContent,
                      tags: [e.target.value],
                    }))
                  }
                >
                  <option value="">--Choose--</option>
                  <option value="home">Home</option>
                  <option value="work">Work</option>
                </select>
                <label htmlFor="note-priority" className="label md-text">
                  Priority:
                </label>
                <select
                  id="note-priority"
                  className="select"
                  name="priority"
                  value={editNoteContent.priority}
                  onChange={(e) =>
                    setEditNoteContent((prevContent) => ({
                      ...prevContent,
                      priority: e.target.value,
                    }))
                  }
                >
                  <option value="">--Choose--</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
                <div>
                  <MdOutlineColorLens
                    onClick={expandColorPallete}
                    className="color-pallete-icon lg-text"
                  />
                </div>
                <button
                  className="btn btn-primary create-note-btn"
                  onClick={(e) =>
                    editNote(e, editNoteContent, setEditNoteContent)
                  }
                >
                  Save Note
                </button>

                {/* {isEditing ? (  <button
              className="btn btn-primary create-note-btn"
              onClick={(e) =>
                editNote(e, noteContent, setNoteContent, setIsOpen)
              }
            >
              Save Note
            </button>) : ( <button
              className="btn btn-primary create-note-btn"
              onClick={(e) =>
                createNote(e, noteContent, setNoteContent, setIsOpen)
              }
            >
              Create Note
            </button>)} */}
              </div>
            </div>
          </form>
        </div>
      </div>

      {isOpen && (
        <ColorPallete
          colorList={editNoteContent.color}
          setColorList={setColorList}
          setNoteContent={setEditNoteContent}
          noteContent={editNoteContent}
        />
      )}
    </>
  );
};

export { EditNoteModal };
