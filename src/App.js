import React, { useState, useEffect } from 'react';
import NotesList from './components/NotesList';
import SearchBar from './components/SearchBar';
import AddNote from './components/AddNote';
import FullNote from './components/FullNote';
import './styles/styles.css'

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);

  // Load notes from localStorage on app load
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  // Save notes to localStorage whenever the notes state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  
  const addNote = ({ title, content }) => {
    const newNote = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      content,
      date: new Date().toLocaleDateString(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
    setSelectedNote(null); // Reset view if the note is deleted
  };

  const updateNote = (id, updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, ...updatedNote } : note
    );
    setNotes(updatedNotes);
    setSelectedNote(null);
  };

  const filteredNotes = notes.filter(
    (note) =>
      (note.title && note.title.toLowerCase().includes(searchText.toLowerCase())) ||
      (note.content && note.content.toLowerCase().includes(searchText.toLowerCase()))
  );

  return (
    <div className="app">
      <h1>NoteBeacon</h1>
      {!selectedNote ? (
        <>
          <SearchBar handleSearch={setSearchText} />
          <AddNote handleAddNote={addNote} />
          <NotesList notes={filteredNotes} handleDeleteNote={deleteNote} handleViewNote={setSelectedNote} />
        </>
      ) : (
        <FullNote
          note={selectedNote}
          handleBack={() => setSelectedNote(null)}
          handleUpdateNote={updateNote}
          handleDeleteNote={deleteNote}
        />
      )}
    </div>
  );
};

export default App;
