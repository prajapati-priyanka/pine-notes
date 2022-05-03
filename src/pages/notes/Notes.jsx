import { useNote } from "../../context/notes-context";
import { NoteCard, PinnedCard } from "../../components";




const Notes = ()=>{

const {notesState, pinnedNotes, setPinnedNotes} = useNote()
    const {notes} = notesState;

    

   
return(
        <>


            <section className="all-notes-section">
            <h4 className="all-notes-heading">All Notes</h4>
            {notes.length > 0 ? (
            <div className="all-notes-container">
             { notes.map((note)=>(
               <NoteCard key={note._id} notes={note} pinnedNotes={pinnedNotes} setPinnedNotes={setPinnedNotes}/>
    ))}
              
              
             
            </div>
         
  
        ): null}

</section>
        

<section className="all-notes-section">
          <h4 className="all-notes-heading">Pinned Notes</h4>
          {pinnedNotes.length > 0 ? (
          <div className="all-notes-container">
           { pinnedNotes.map((note)=>(
             <PinnedCard key={note._id} notes={note} />
  ))}
            
            
           
          </div>
      

        ) : null }
  </section>
     
        </>
    )
}

export {Notes}