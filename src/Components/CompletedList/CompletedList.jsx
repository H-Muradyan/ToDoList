import React from 'react'
import "antd/dist/antd.css";
import { Checkbox } from 'antd';

const photo = require('../../assets/Icon/delete.png');

function ToDoList({toDoDatas, handleDelete, onChange}) {

  return (
    <div className='listData'>
        {!toDoDatas.every(elem => elem.isCompleted) 
            ? toDoDatas.map((data,i) => {
                return (
                    !data.isCompleted &&
                    <div key={i}>
                        <div className='lists' key={data.id}>   
                            <Checkbox  lassName='box' onChange={() => onChange({
                                ...data,
                                isCompleted: !data.isCompleted
                            })}>
                            </Checkbox>
                           
                            <div className='task'>{data.text}</div>
                            
                            <img className='delete' src={photo} alt='delete-icon' onClick={() => handleDelete(data.id)}/>
                        </div>
                        <div className='line'></div>
                    </div>
                )
            })
            : <div className='texts'>
                <p className='text1'>your life is a blank page. You write on it.</p>
                <p className='text2'>So start by adding your tasks here.</p>
            </div>
        }
    </div>
  )
}

export default ToDoList