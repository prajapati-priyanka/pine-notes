import { useEffect } from "react";
import { SideNav, NoteCard } from "../../components";
import { useTrash } from "../../context/trash-context";
import "./Trash.css"

const Trash = () => {
  const {trashState: {trash}, getAllTrashNotesHandler} = useTrash();
 
useEffect(()=>{
  getAllTrashNotesHandler();
},[])

  return (
    <div className="main-container">
      <SideNav />
      {
        trash.length > 0 ?(

          <section className="all-notes-section">
        <h4 className="all-notes-heading">All Notes</h4>

        <div className="all-notes-container">
          {trash.map((note) => (
            <NoteCard
              key={note._id}
              notes={note}
              // pinnedNotes={pinnedNotes}
              // setPinnedNotes={setPinnedNotes}
            />
          ))}
        </div>
      </section>

        ): ( <div className="empty-trash-container">
          <div className="empty-trash-content text-center">
          <figure>
          <img src="./assets/trash.png" className="empty-trash-img img-responsive" alt="empty-bin" />
        </figure>
        <p className="empty-trash-desc lg-text">Nothing in the Trash</p>
          </div>
      
      </div>
        )

      }
     
    </div>
  );
};

export { Trash };
