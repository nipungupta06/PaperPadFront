import { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = (props)=>{
    const notesinitial=[]
    const [notes, setNotes] = useState(notesinitial)
    const url="http://localhost:8000"
    const getNote=async()=>{
      const response = await fetch(`${url}/api/notes/fetchallnotes`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')
        }
      });
      const data = await response.json();
      
      setNotes(data);
    }
    const addNote=async({title,description,tag})=>{
      const response = await fetch(`${url}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token":localStorage.getItem('token')        
        },
        body: JSON.stringify({title, description, tag})
      });
      // eslint-disable-next-line
      const data = await response.json();
      
        
    }
    const deleteNote=async(id)=>{
      const response = await fetch(`${url}/api/notes/deletenote/${id}`, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token')        }
      });
      console.log("DELETE CALLED")
      // eslint-disable-next-line
      const data = await response.json();
      setNotes(notes.filter((note)=>{return note._id!==id}))
        
    }

    const editNote = async (id, title, description, tag) => {
      // API Call 
      const response = await fetch(`${url}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token":localStorage.getItem('token')        },
        body: JSON.stringify({title, description, tag})
      });
      // eslint-disable-next-line
      const data = await response.json();
      
      // Logic to edit in client
      const newNote=JSON.parse(JSON.stringify(notes))
      for (let index = 0; index < notes.length; index++) {
        if (newNote[index]._id === id) {
          newNote[index].title = title;
          newNote[index].description = description;
          newNote[index].tag = tag;
          break;
        }
      }
      setNotes(newNote);
    }
    return (
        <NoteContext.Provider value={{notes,getNote,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;