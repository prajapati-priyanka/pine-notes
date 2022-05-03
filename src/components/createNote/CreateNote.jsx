import { useState } from "react";
import { useNote } from "../../context/notes-context";

import "./CreateNote.css";
const CreateNote = () => {
  const { createNote } = useNote();

  const initialNotesData = {
    title: "",
    content: "",
    color: "red",
    tags: [],
    priority: "low",
  };

  const [noteContent, setNoteContent] = useState(initialNotesData);

  return (
    <div className="add-note-container card-shadow">
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
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <label htmlFor="note-color" className="label md-text">
            Color:
          </label>
          <select
            id="note-color"
            className="select"
            name="noteColor"
            value={noteContent.color}
            onChange={(e) =>
              setNoteContent((prevContent) => ({
                ...prevContent,
                color: e.target.value,
              }))
            }
          >
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
          </select>
          
          <button
            className="btn btn-primary create-note-btn"
            onClick={(e) => createNote(e, noteContent, setNoteContent)}
          >
            Create Note
          </button>
        </div>
      </div>
      
    </div>
  );
};

export { CreateNote };
