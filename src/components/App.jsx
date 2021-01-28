import React from 'react';
import useLocalStorage from './useLocalStorage';

import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

// import notes from '../notes';

const App = () => {
  const intialState = [];

  // const [notes, setNotes] = useState(intialState);
  // const localNotes = windowGlobal.localstorage.getItem('notes');

  const [notes, setNotes] = useLocalStorage('localNotes', [intialState]);
  // console.log(notes);

  const addNote = (newNote) => {
    // localStorage.setItem('notes', JSON.stringify(newNote));
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
};

export default App;
