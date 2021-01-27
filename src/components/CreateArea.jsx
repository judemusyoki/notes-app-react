import React, { useState } from 'react';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: '',
    content: '',
  });

  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNewNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  const submitNote = (event) => {
    props.onAdd(newNote);
    setNewNote({
      title: '',
      content: '',
    });
    event.preventDefault();
  };

  const expand = () => {
    setExpanded(true);
  };

  return (
    <div>
      <form className='create-note'>
        {isExpanded && (
          <input
            name='title'
            onChange={handleChange}
            placeholder='Title'
            value={newNote.title}
          />
        )}

        <textarea
          name='content'
          onChange={handleChange}
          onClick={expand}
          value={newNote.content}
          placeholder='Take a note...'
          rows={isExpanded ? '3' : '1'}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
