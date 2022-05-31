import { useEffect, useState } from 'react'
import css from '../components_css/Task.css'

export default function Task (props) {       
    return(
        <div>
            {props.tasks.map(task=>{
                return(
                    <div className='task-div' key={task}>
                        <input id={task} type='radio'></input>
                        <label htmlFor={task}>{task}</label>
                        <div className='remove'></div>
                    </div>
                )
            })}
            
        </div>
    )
}