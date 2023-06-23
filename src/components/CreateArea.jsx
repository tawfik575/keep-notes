import React, { useState } from "react";
import { Fab, Zoom } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function CreateArea(props) {
    const [checked, setChecked] = useState(false);
    const [note, setNote] = useState({ title: "", content: "" });

    function handleChange(event) {
        if(event.key === "Enter")
            event.preventDefault();
            
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    function manageClick(event) {
        event.preventDefault();

        if (note.title.length > 0 && note.content.length > 0) {
            props.handleClick(note);

            setChecked(false);

            setNote({
                title: "",
                content: ""
            });
        }
    }

    return (
        <div>
            <form className="create-note">
                {checked && <input onChange={handleChange} onKeyDown={handleChange} name="title" value={note.title} placeholder="Title" autoFocus/>}
                <textarea onClick={() => setChecked(true)} onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows={checked ? 3 : 1} />
                <Zoom in={checked}><Fab onClick={manageClick}><AddIcon /></Fab></Zoom>
            </form>
        </div>
    );
}