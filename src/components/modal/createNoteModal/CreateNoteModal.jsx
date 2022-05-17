import { useState } from "react";
import { MdOutlineColorLens } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import "./CreateNoteModal.css";
import { ColorPallete } from "../../colorPallete/ColorPallete";
import { useAuth, useLabels, useNote } from "../../../context";
import { editNoteHandler } from "../../../helpers/utils/editNoteHandler";
import { addNoteHandler } from "../../../helpers/utils/addNoteHandler";

const CreateNoteModal = ({
  setCreateNoteModalVisible,
  editNote,
  setEditNote,
}) => {
  const [colorList, setColorList] = useState("");

  const { isOpen, setIsOpen, notesDispatch } = useNote();
  const {
    labelsState: { labels },
  } = useLabels();
  const { authState } = useAuth();

  const token = authState.token || localStorage.getItem("token");

  const initialNotesData = editNote ?? {
    title: "",
    content: "",
    color: colorList,
    labels: [],
    priority: "",
    date: new Date().toLocaleString(),
  };
  const [noteContent, setNoteContent] = useState(initialNotesData);

  const checkInputs = () => {
    if (noteContent.title !== "" && noteContent.content !== "") {
      return true;
    }
    return false;
  };

  const createNoteHandler = (e) => {
    const newNote = { ...noteContent };

    if (checkInputs()) {
      editNote
        ? editNoteHandler(e, token, newNote, notesDispatch)
        : addNoteHandler(e, token, newNote, notesDispatch);
    }
    setEditNote(null);
    setIsOpen(false);
    setCreateNoteModalVisible(false);
  };

  const expandColorPallete = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <div className="modal-background">
        <div className="modal-container">
          <header className="modal-header">
            {editNote ? <h3>Edit Note</h3> : <h3>Create Note</h3>}
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
                  value={noteContent.labels[0]}
                  onChange={(e) =>
                    setNoteContent((prevContent) => ({
                      ...prevContent,
                      labels: [e.target.value],
                    }))
                  }
                >
                  <option value="">None</option>
                  {labels.map((label, index) => (
                    <option key={index} value={label}>
                      {label}
                    </option>
                  ))}
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
                  <option value="high">High</option>
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
                  onClick={createNoteHandler}
                >
                  {editNote ? "Save Note" : "Create Note"}
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
