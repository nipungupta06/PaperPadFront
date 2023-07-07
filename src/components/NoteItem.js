import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'

export default function NoteItem(props) {
    const { deleteNote } = useContext(NoteContext)

    const { note, updateNote } = props;
    return (
        <div className='col-md-3 my-2'>
            <div className="card" >
                <div className="card-body">

                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-trash mx-1" onClick={() => { deleteNote(note._id) }}></i>
                    <i className="fa-regular fa-pen-to-square mx-1" onClick={() => updateNote(note)}></i>
                    <span class="mx-2 badge rounded bg-danger">{note.tag} </span>
                </div>
            </div>
        </div>
    )
}
