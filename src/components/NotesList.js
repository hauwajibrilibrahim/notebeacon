import React from 'react';
import Note from './Note';

const NotesList = ({ notes, handleDeleteNote, handleViewNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
          handleViewNote={handleViewNote}
        />
      ))}
    </div>
  );
};

export default NotesList;
