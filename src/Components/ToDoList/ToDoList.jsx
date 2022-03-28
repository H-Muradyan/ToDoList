import React from 'react'
import "antd/dist/antd.css";
import './ToDoList.css'
import { Checkbox } from 'antd';



function ToDoList({toDoDatas, handleDelete, onChange}) {



  return (
    <div className='listData'>
        {toDoDatas.length > 0
            ? toDoDatas.map((data) => {
                return (
                    <>
                        <div className='lists' key={data.id}>   
                            <Checkbox className='box'></Checkbox>
                            <div className='task'>{data.text}</div>
                            <div className='delete' onClick={() => handleDelete(data.id)}></div>
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