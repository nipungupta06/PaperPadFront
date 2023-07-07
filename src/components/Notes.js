import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'
import { Link, useNavigate } from 'react-router-dom'

export default function Notes() {
  
  const ref = useRef(null)
  let navigate = useNavigate();
  const refClose = useRef(null)
  const context = useContext(NoteContext)
  const { notes, getNote,editNote } = context
  const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: ""})

  const updateNote = (currentNote) => {
      ref.current.click();
      setNote({id:currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
  }

  const handleClick = (e)=>{
    refClose.current.click()
    editNote(note.id, note.etitle,note.edescription,note.etag)
  }

  const onChange = (e)=>{
      setNote({...note, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    if(!localStorage.getItem('token'))
      {
        navigate('/login')
      }
      else{

        getNote()
      }
    // eslint-disable-next-line
  }, [])
  return (
    <>

      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                </div>

              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleClick} disabled={note.etitle.length===0} type="button" className="btn btn-primary">Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} updateNote={updateNote} />
        })}
        
      </div>
      <div className='text-center'>
        <Link to="/addnote"><button className="btn btn-primary m-auto" type="button"><i className="fa-solid fa-plus" style={{ color: "#ffffff" }}></i></button></Link>
      </div>

    </>
  )
}
