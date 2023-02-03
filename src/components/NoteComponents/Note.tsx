import React from 'react'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'

interface INoteProps {
    id: string;
    text: string;
    deleteNoteHandler: Function;
}

function Note({id, text, deleteNoteHandler}: INoteProps) {
    return (
        <div className='note'>
            <div className='note__body'>{ text }</div>
            <div className='note__footer' style={{ justifyContent: "flex-end" }}>
                <DeleteForeverOutlinedIcon
                    className='note__delete'
                    onClick={() => deleteNoteHandler(id)}
                    aria-hidden='true'
                />
            </div>
        </div>
    );
}

export default Note;