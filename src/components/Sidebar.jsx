export default function Sidebar(props){
    const noteElements =props.notes.map((note,index) =>(
        <div 
        className={`title ${note.id===currentNote.id?"selected-none":""}`}
        onClick={()=>props.setCurrentNoteId(note.id)}
        >
            <h4 className="text-snippet">Note {index+1}</h4>
        </div>
    ))
    return (
        <section className="pane sidebar"> 
        <div className="sidebar--header">
        <h3>Notes</h3>
        <button className="new-note" onClick={props.newNote}>+</button>
        </div>
        {noteElements}
        </section>
    )
}