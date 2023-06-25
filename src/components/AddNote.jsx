import React, { useState } from 'react'

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const CHARACTER_LIMIT = 250;

    const handleChange = (event) => {
        if (CHARACTER_LIMIT - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    };

    const hadnleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    }
    return (
        <div className='note new'>
            <textarea
                onChange={handleChange}
                rows="8"
                cols="10"
                value={noteText}
                placeholder='Type to add a note...'
            ></textarea>
            <div className="note-footer">
                <small>{CHARACTER_LIMIT - noteText.length} Remaining</small>
                <button onClick={hadnleSaveClick} className='save'>Save</button>
            </div>
        </div>
    )
}

export default AddNote
