import React, { ChangeEventHandler, MouseEventHandler } from 'react'
import { LinearProgress } from '@mui/material';

interface INewNoteProps {
    textHandler: ChangeEventHandler;
    saveNoteHandler: MouseEventHandler;
    inputText: string;
}

function NewNote({ textHandler, saveNoteHandler, inputText }: INewNoteProps) {
    const charLimit = 100;
    const charLeft = charLimit - inputText.length;

    return (
        <div className='note' style={{ background: 'rgba(255, 255, 255, 0)' }}>
            <textarea
                cols={ 10 }
                rows={ 5 }
                value={ inputText }
                placeholder='Enter text...'
                onChange={ textHandler }
                maxLength={ 100 }
            >

            </textarea>
            <div className='note__footer'>
                <span className='label'>{ charLeft } left</span>
                <button className='note__save' onClick={ saveNoteHandler }>
                    Save
                </button>
            </div>
            <LinearProgress
                className='char__progress'
                variant='determinate'
                value={ charLeft }
            />
        </div>  
    );
}

export default NewNote;