import { useEffect } from "react";
import { SideNav, NoteCard } from "../../components";
import { useArchive } from "../../context/archive-context";
import "../trash/Trash.css"

const Archive = () => {
  const {archiveState: {archive}, getAllArchivedNotesHandler} = useArchive();
 
useEffect(()=>{
  getAllArchivedNotesHandler();
},[])
 


  return (
    <div className="main-container">
      <SideNav />
     
      {archive.length > 0 ?(

          <section className="all-notes-section">
          <h4 className="all-notes-heading">Archived Notes</h4>

        <div className="all-notes-container">
          {archive.map((note) => (
            <NoteCard
              key={note._id}
              notes={note}
             
            />
          ))}
        </div>
      </section>

        ): (  
        <div className="empty-trash-container">
          <div className="empty-trash-content text-center">
          <figure>
          <img src="./assets/archive.png" className="empty-archive-img img-responsive" alt="empty-bin" />
        </figure>
        <p className="empty-trash-desc lg-text">Nothing in the Archive</p>
          </div>
      
      </div>
         ) 

      } 
     
    </div>
  );
};

export { Archive };
