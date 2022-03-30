import React, { useState } from 'react'
import './App.css';
import ToDoForm from "./Components/ToDoForm/ToDoForm";
import ToDoList from './Components/ToDoList/ToDoList';
import CompletedList from './Components/CompletedList/CompletedList';


function App() {

  let [toDoDatas, setToDodatas] = useState([])
  let [hideCompleted, setHideCompleted] = useState(false)

  const addTask = (taskText) => {
    setToDodatas([
      {
        id: Math.random(),
        text: taskText,
        isCompleted: false
      },
      ...toDoDatas, 
    ])
  }

  const hideChange = () => {
    return setHideCompleted(!hideCompleted)
  }

  const handleDelete = id => {
    setToDodatas(
      toDoDatas.filter(data => {
        return data.id !== id
      })
    )
  }

  const onChange = newData => {
    setToDodatas(
      toDoDatas.map(data => {
        if(data.id === newData.id) {
          return newData
        }
        return data
      })
    )
  }


  return (
    <div className="App">
      <ToDoForm 
        addTask={addTask}
        hideChange={hideChange}
      />
      {!hideCompleted
        ? <ToDoList 
            toDoDatas={toDoDatas}
            handleDelete={handleDelete}
            onChange={onChange}
          />
        : <CompletedList 
            toDoDatas={toDoDatas}
            handleDelete={handleDelete}
            onChange={onChange}
          />
      }
     
    </div>
  );
}

export default App;
