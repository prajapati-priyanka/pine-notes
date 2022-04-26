import "./CreateNote.css"
const CreateNote = ()=>{

    return(
        <div className="add-note-container">
        <input
          type="text"
          className="note-title"
          placeholder="Enter title.."
        />
        <textarea
          name="note-desc"
          id="note-desc"
          cols="10"
          rows="10"
          className="note-content"
          placeholder="Enter content.."
        />
        <div className="add-note-footer">
          <div className="note-select">
            <label for="note-label" className="label md-text">
              Label:
            </label>
            <select id="note-label" className="select">
              <option value="Label 1">Label 1</option>
              <option value="Label 2">Label 2</option>
              <option value="Label 3">Label 3</option>
            </select>
            <label for="note-priority" className="label md-text">
              Priority:
            </label>
            <select id="note-priority" className="select">
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <label for="note-color" className="label md-text">
              Color:
            </label>
            <select id="note-color" className="select">
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
            </select>
            <button className="btn btn-primary create-note-btn">
              Create Note
            </button>
          </div>
        </div>
      </div>
    )
}

export {CreateNote};
