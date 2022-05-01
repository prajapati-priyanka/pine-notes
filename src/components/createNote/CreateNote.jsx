import { useState } from "react";
import { useNote } from "../../context/notes-context";

import "./CreateNote.css";
const CreateNote = () => {

  const {createNote} = useNote();
  const [noteContent, setNoteContent] = useState({
    title: "",
    content: "",
    label: "",
    priority: "",
    noteColor: "",
  });

  

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
       setNoteContent((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };



  return (
    <div className="add-note-container">
      <input
        type="text"
        className="note-title"
        placeholder="Enter title.."
        name="title"
        value={noteContent.title}
        onChange={(e) => onChangeHandler(e)}
      />
      <textarea
        id="note-desc"
        cols="10"
        rows="10"
        className="note-content"
        placeholder="Enter content.."
        name="content"
        value={noteContent.content}
        onChange={(e) => onChangeHandler(e)}
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
            value={noteContent.label}
            onChange={(e) => onChangeHandler(e)}
          >
            <option value="">--Choose--</option>
            <option value="Label 1">Label 1</option>
            <option value="Label 2">Label 2</option>
            <option value="Label 3">Label 3</option>
          </select>
          <label htmlFor="note-priority" className="label md-text">
            Priority:
          </label>
          <select
            id="note-priority"
            className="select"
            name="priority"
            value={noteContent.priority}
            onChange={(e) => onChangeHandler(e)}
          >
            <option value="">--Choose--</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <label htmlFor="note-color" className="label md-text">
            Color:
          </label>
          <select
            id="note-color"
            className="select"
            name="noteColor"
            value={noteContent.noteColor}
            onChange={(e) => onChangeHandler(e)}
          >
            <option value="">--Choose--</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
          </select>
          <button className="btn btn-primary create-note-btn" onClick={(e) => createNote(e,noteContent,setNoteContent)}>
            Create Note
          </button>
        </div>
      </div>
    </div>
  );
};

export { CreateNote };
