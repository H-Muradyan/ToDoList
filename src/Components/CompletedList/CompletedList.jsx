import React from 'react'
import "antd/dist/antd.css";
import { Checkbox } from 'antd';

const photo = require('../../Icon/Vector.png');

function ToDoList({toDoDatas, handleDelete, onChange}) {


  return (
    <div className='listData'>
        {toDoDatas.length > 0
            ? toDoDatas.map((data) => {
                
                return (
                    !data.isCompleted &&
                    <>
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
                    </>
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
