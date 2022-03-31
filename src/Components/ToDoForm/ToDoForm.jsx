import React, {useState} from 'react'
import "antd/dist/antd.css";
import './ToDoForm.css'
import { Input, Checkbox } from 'antd';




function ToDoForm({addTask, hideChange}) {
    let [taskText, setTaskText] = useState('');
  
    const handleChange = (e) => {
      setTaskText(e.target.value);
  }

    const handleSubmit = (e) => {
        e.preventDefault();
        taskText.length > 0 &&
        addTask(taskText);
        setTaskText(''); 
    }



  return (
    <div className='generelHome'>
        <div className='hide'>
            <Checkbox onChange={() => hideChange()} className='hideBox'></Checkbox>
            <p className='hideText'>Hide completed</p>
        </div>
        <p className='title'>Task</p>
        <form className='inputForm' onSubmit={handleSubmit}>
            {taskText.trim().length === 0
                ? <Input className='textField'
                  maxLength={54}
                  value={taskText} onChange={handleChange} placeholder="Write here" allowClear  autoFocus={taskText.length > 0 ? true : false}
                   />
                : <div className='errorMessage'>
                    <Input className='textField'
                  maxLength={54}
                     value={taskText} onChange={handleChange}
                      placeholder="Write here" allowClear  autoFocus style={{border: "1px solid red"}}/>
                    <p>Task content can contain max 54 characters.</p>
                </div>
            }
            <input className='buttonFeild' type='submit' value='Add' />
        </form>
    </div>
  )
}

export default ToDoForm;
