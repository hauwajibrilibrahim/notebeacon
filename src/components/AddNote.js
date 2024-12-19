import React, { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const titleCharLimit = 100;
  const contentCharLimit = 10000;

  const handleSaveClick = () => {
    if (noteTitle.trim().length > 0 && noteContent.trim().length > 0) {
      handleAddNote({ title: noteTitle, content: noteContent });
      setNoteTitle('');
      setNoteContent('');
    }
  };
  
  return (
    <div className="note new">
      <input
        type="text"
        placeholder="Enter title..."
        value={noteTitle}
        onChange={(e) => {
          if (titleCharLimit - e.target.value.length >= 0) {
            setNoteTitle(e.target.value);
          }
        }}
      />
      <textarea
        rows="10"
        cols="10"
        placeholder="Enter note content..."
        value={noteContent}
        onChange={(e) => {
          if (contentCharLimit - e.target.value.length >= 0) {
            setNoteContent(e.target.value);
          }
        }}
      ></textarea>
      <div className="note-footer">
        <small><i>{contentCharLimit - noteContent.length} Remaining...</i></small>
        <button onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
};

export default AddNote;
