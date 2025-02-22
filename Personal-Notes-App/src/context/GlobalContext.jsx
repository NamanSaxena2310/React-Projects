import React, { createContext, useReducer, useEffect, useState } from 'react';
import AppReducer from './AppReducer';

// Load from local storage or use default notes
const getInitialState = () => {
  const savedNotes = localStorage.getItem('notes');
  return savedNotes ? JSON.parse(savedNotes) : {
  notes: [
    
  ]

  }
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, getInitialState());
  const [selectedNote, setSelectedNote] = useState(null);

  // **Save notes to localStorage whenever notes change**
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(state));
  }, [state]);

  const deleteNote = (id) => {
    dispatch({
      type: 'DELETE_NOTE',
      payload: id
    });
  };

  const addNote = (note) => {
    dispatch({
      type: 'ADD_NOTE',
      payload: note
    });
  };

  const editNote = ({ id, note }) => {
    dispatch({
      type: 'EDIT_NOTE',
      payload: { id, note }
    });
  };

  return (
    <GlobalContext.Provider value={{
      notes: state.notes,
      deleteNote,
      addNote,
      editNote,
      selectedNote,
      setSelectedNote
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
