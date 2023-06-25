import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'
import NotesList from './components/NotesList'
// import { notesData } from './constants/data';
import Search from './components/Search';
import Header from './components/Header';

function App() {

  const [note, setNote] = useState(JSON.parse(localStorage.getItem('react-notes-app-data'))|| []);

  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if (savedNotes) {
      setNote(savedNotes);
    }
  }, [])

  useEffect(() => {
    if (localStorage.getItem('react-notes-app-data')) {
      localStorage.setItem('react-notes-app-data', JSON.stringify(note))
    }
  }, [note])

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...note, newNote];
    setNote(newNotes)
  }


  const deleteNote = (id) => {
    const newNotes = note.filter((currentNote) => currentNote.id !== id);
    setNote(newNotes);
  }


  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={note.filter((currentNote) =>
            currentNote.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  )
}

export default App
