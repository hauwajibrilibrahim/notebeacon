import React from 'react';
import { FaTrash } from 'react-icons/fa';

const Note = ({ note, handleDeleteNote, handleViewNote }) => {
  const { id, title, date } = note;

  return (
    <div className="note" onClick={() => handleViewNote(note)}>
      <h3>{title}</h3>
      <div className="note-footer">
        <small>{date}</small>
        <FaTrash
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering view on delete
            handleDeleteNote(id);
          }}
          style={{ cursor: 'pointer', color: 'green' }}
        />
      </div>
    </div>
  );
};

export default Note;
