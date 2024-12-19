import React, { useState } from 'react';

const FullNote = ({ note, handleBack, handleUpdateNote, handleDeleteNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(note.title);
  const [updatedContent, setUpdatedContent] = useState(note.content);

  const handleSave = () => {
    handleUpdateNote(note.id, { title: updatedTitle, content: updatedContent });
    setIsEditing(false);
  };

  return (
    <div className="full-note">
      <button onClick={handleBack}>Back</button>
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            rows="10"
            cols="10"
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
          ></textarea>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <small>{note.date}</small>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default FullNote;
