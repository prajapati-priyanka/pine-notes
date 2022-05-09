import { useState } from "react";
import { useNote } from "../../../context/notes-context";
import { MdOutlineColorLens } from "react-icons/md";
import { IoClose } from "react-icons/io5";

import "./CreateNoteModal.css";
import { ColorPallete } from "../../colorPallete/ColorPallete";
const CreateNoteModal = ({ setCreateNoteModalVisible }) => {
  const [colorList, setColorList] = useState("");

  const { createNote, isOpen, setIsOpen } = useNote();

  const initialNotesData = {
    title: "",
    content: "",
    color: colorList,
    tags: [],
    priority: "",
  };

  const [noteContent, setNoteContent] = useState(initialNotesData);

  const expandColorPallete = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <div className="modal-background">
        <div className="modal-container">
          <header className="modal-header">
            <h3>Create Note</h3>
            <button
              className="close-icon"
              onClick={() => setCreateNoteModalVisible(false)}
            >
              <IoClose />
            </button>
          </header>
          <form
            className="add-note-container"
            style={{ backgroundColor: noteContent.color }}
          >
            <input
              type="text"
              className="note-title"
              placeholder="Enter title.."
              name="title"
              value={noteContent.title}
              onChange={(e) =>
                setNoteContent((prevContent) => ({
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
              value={noteContent.content}
              onChange={(e) =>
                setNoteContent((prevContent) => ({
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
                  value={noteContent.value}
                  onChange={(e) =>
                    setNoteContent((prevContent) => ({
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
                  value={noteContent.priority}
                  onChange={(e) =>
                    setNoteContent((prevContent) => ({
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
                  onClick={(e) => createNote(e, noteContent, setNoteContent)}
                >
                  Create Note
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {isOpen && (
        <ColorPallete
          colorList={noteContent.color}
          setColorList={setColorList}
          setNoteContent={setNoteContent}
          noteContent={noteContent}
        />
      )}
    </>
  );
};

export { CreateNoteModal };
