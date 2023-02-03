import React, { useState, useEffect } from 'react';
import Note from './Note'
import '../../css/Note.css'

function Notes() {
    return (
        <div className='notes'>
            <Note />
            <Note />
            <Note />
        </div>
    );
}

export default Notes;