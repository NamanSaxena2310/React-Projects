import React,{createContext, useReducer, useState} from 'react'
import AppReducer from './AppReducer'


const initialState = {
  notes: [
    {
      "id": 1,
      "title": "Grocery List",
      "content": "- Milk\n- Eggs\n- Bread\n- Coffee",
      "date": "2024-02-21"
    },
    {
      "id": 2,
      "title": "Meeting Notes",
      "content": "Project deadline discussion.\n- Review designs\n- Assign tasks\n- Finalize budget",
      "date": "2024-02-20"
    },
    {
      "id": 3,
      "title": "Workout Plan",
      "content": "Monday: Cardio\nTuesday: Strength Training\nWednesday: Rest\nThursday: HIIT\nFriday: Yoga",
      "date": "2024-02-19"
    },
    {
      "id": 4,
      "title": "Personal Goals",
      "content": "- Read 2 books this month\n- Learn React Advanced Concepts\n- Save $500",
      "date": "2024-02-18"
    },
    {
      "id": 5,
      "title": "Recipe Ideas",
      "content": "1. Spaghetti Carbonara 🍝\n2. Chicken Stir Fry 🥡\n3. Homemade Pizza 🍕\n4. Avocado Toast 🥑",
      "date": "2024-02-17"
    },
    
  ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children})=>{
  const [state,dispatch] = useReducer(AppReducer,initialState)
  const [selectedNote, setSelectedNote] = useState(null)

  const deleteNote = (id)=>{
    dispatch({
      type: 'DELETE_NOTE',
      payload: id
    })
  }

  const addNote = (note)=>{
    dispatch({
      type: 'ADD_NOTE',
      payload: note
    })
  }

  const editNote = ({id,note})=>{
    dispatch({
      type: 'EDIT_NOTE',
      payload: {id,note}
    })
  }

  return(
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
  )
}