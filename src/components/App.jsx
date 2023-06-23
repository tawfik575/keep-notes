import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import React, { useState } from "react";

export default function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => index !== id);
        });
    }

    return (
        <div>
            <Header />
            <CreateArea handleClick={addNote}/>
            {notes.map((note, index) => {
                return (<Note key={index} id={index} title={note.title}
                    content={note.content} handleClick={deleteNote} />);
            })}
            <Footer />
        </div>
    );
}