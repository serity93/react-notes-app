import React, { ChangeEventHandler, MouseEventHandler, TextareaHTMLAttributes } from 'react'

interface INewNoteProps {
    textHandler: ChangeEventHandler;
    saveNoteHandler: MouseEventHandler;
    inputText: string;
}

function NewNote({ textHandler, saveNoteHandler, inputText }: INewNoteProps) {
    return (
        <div className='note' style={{ background: 'rgba(255, 255, 255, 0)' }}>
            <textarea
                cols={ 10 }
                rows={ 5 }
                placeholder='Enter text...'
                onChange={ textHandler }
                maxLength={ 100 }
            >

            </textarea>
            <div className='note__footer'>
                <span className='label'> left</span>
                <button className='note__save' onClick={ saveNoteHandler }>
                    Save
                </button>
            </div>
        </div>  
    );
}

export default NewNote;