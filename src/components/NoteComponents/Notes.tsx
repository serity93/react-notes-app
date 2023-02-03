import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import Note from './Note'
import NewNote from './NewNote'
import '../../css/Note.css'

interface INote {
    id: string;
    text: string;
}

function Notes() {
    const [notes, setNotes] = useState<INote[]>([]);
    const [inputText, setInputText] = useState('');

    const textHandler = (e: any) => {
        setInputText(e.target.value);
    };

    const saveNote = () => {
        setNotes((prevState) => [
            ...prevState,
            {
                id: uuid(),
                text: inputText,
            },
        ]);

        setInputText('');
    };

    const deleteNote = (id: string) => {
        const filterNotes = notes.filter((note) => note.id !== id);
        setNotes(filterNotes);
    };

    return (
        <div className='notes'>
            { notes.map((note) => (
                <Note
                    key={ note.id }
                    id={ note.id }
                    text={ note.text }
                    deleteNoteHandler={ deleteNote }
                />
            ))}
            <NewNote
                textHandler={ textHandler }
                saveNoteHandler={ saveNote }
                inputText={ inputText }
            />
        </div>
    );
}

export default Notes;