import React, { useContext,useState ,useRef} from 'react'
import NoteContext from '../context/notes/NoteContext'
import { Link } from 'react-router-dom';
export default function AddNote() {
    const context = useContext(NoteContext)
    const {addNote}=context;
    const [note, setNote] = useState({title:"", description:"", tag:"General"})
    const handleChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    const handleClick=(e)=>{
        linkref.current.click();
        addNote(note)

    }
    const linkref = useRef(null);
  return (
    <div className='container my-4'>
        <h1>Add a Note</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title:<span style={{color:"red"}}>*</span></label>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={handleChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <input type="text" className="form-control" id="description" name="description" onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag:</label>
                    <input type="text" className="form-control" id="tag" name="tag" onChange={handleChange}/>
                </div>
                <button disabled={note.title.length===0}type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
                <Link ref={linkref} to="/" className="hidden"></Link>
            </form>
    </div>
  )
}
