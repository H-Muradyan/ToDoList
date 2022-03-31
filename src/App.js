import React, { useEffect, useState } from 'react'
import './App.css';
import ToDoForm from "./Components/ToDoForm/ToDoForm";
import ToDoList from './Components/ToDoList/ToDoList';
import CompletedList from './Components/CompletedList/CompletedList';



function App() {

  const getLocalToDoDatas = () => {
    let data = localStorage.getItem('data');
    if(data) {
      return JSON.parse(localStorage.getItem('data'));
    } else 
      return [];
  }

  let [toDoDatas, setToDodatas] = useState(getLocalToDoDatas());
  let [hideCompleted, setHideCompleted] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  let [deleteID, setDeleteID] = useState(null);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(toDoDatas));
  }, [toDoDatas])


  const showModal = (id) => {
    setDeleteID(id);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
    return setHideCompleted(!hideCompleted);
  }

  const handleDelete = () => {
    setToDodatas(
      toDoDatas.filter(data => {
        return data.id !== deleteID;
      })
    )
    setIsModalVisible(false);
  }

  const onChange = newData => {
    setToDodatas(
      toDoDatas.map(data => {
        if(data.id === newData.id) {
          return newData;
        }
        return data;
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
            showModal={showModal}
            handleCancel={handleCancel}
            isModalVisible={isModalVisible}
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