import React, { useState } from 'react'
import './App.css';
import ToDoForm from "./Components/ToDoForm/ToDoForm";
import ToDoList from './Components/ToDoList/ToDoList';


function App() {

  let [toDoDatas, setToDodatas] = useState([])

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

  const handleDelete = id => {
    setToDodatas(
      toDoDatas.filter(data => {
        return data.id !== id
      })
    )
  }

  // const onChange = id => {
  //   setToDodatas(
  //     toDoDatas.map(data => {
  //       if(data.id === id) {
          
  //       }
  //     })
  //   )
  // }

  return (
    <div className="App">
      <ToDoForm addTask={addTask}/>
      <ToDoList 
        toDoDatas={toDoDatas}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
