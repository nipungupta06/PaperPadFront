import { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = (props)=>{
    const notesinitial=[
        {
          "_id": "649313e510b95c4ef34e88ca",
          "user": "6493029894e17efd16c36fde",
          "title": "My first Note",
          "description": "d",
          "tag": "General",
          "date": "1687360485419",
          "__v": 0
        },
        {
          "_id": "6493144800a417bb07fc8c52",
          "user": "6493029894e17efd16c36fde",
          "title": "My Second Note",
          "description": "werczcz",
          "tag": "General",
          "date": "1687360584136",
          "__v": 0
        },
        {
          "_id": "6493144d00a417bb07fc8c54",
          "user": "6493029894e17efd16c36fde",
          "title": "My Third Note",
          "description": "w",
          "tag": "General",
          "date": "1687360589179",
          "__v": 0
        },
        {
            "_id": "6493144800a417bb07fc8c52",
            "user": "6493029894e17efd16c36fde",
            "title": "My Second Note",
            "description": "werczcz",
            "tag": "General",
            "date": "1687360584136",
            "__v": 0
          },
          {
            "_id": "6493144800a417bb07fc8c52",
            "user": "6493029894e17efd16c36fde",
            "title": "My Second Note",
            "description": "werczcz",
            "tag": "General",
            "date": "1687360584136",
            "__v": 0
          },
          {
            "_id": "6493144800a417bb07fc8c52",
            "user": "6493029894e17efd16c36fde",
            "title": "My Second Note",
            "description": "werczcz",
            "tag": "General",
            "date": "1687360584136",
            "__v": 0
          },
          {
            "_id": "6493144800a417bb07fc8c52",
            "user": "6493029894e17efd16c36fde",
            "title": "My Second Note",
            "description": "werczcz",
            "tag": "General",
            "date": "1687360584136",
            "__v": 0
          }
      ]
    const [notes, setNotes] = useState(notesinitial)
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;