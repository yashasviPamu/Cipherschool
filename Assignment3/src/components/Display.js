import React from 'react';
import './display.css';
import Loading from './Loading';

const Display = ({taskDetails, deleteTask}) => {

    const taskList = taskDetails.length ? taskDetails.map( (element) => {

        const { title, time, description, id } = element;
        return (
            <div className='task-card' key={id}> 
                <h3>Course Name: {title} </h3>
                <p>Time: {time}</p>
                <p>Description:<i>{description}</i></p>
                <button className='delete' onClick={() => {deleteTask(id)}}>Delete</button> 
           </div>        
        )
    }) : ( <Loading />)

    return(
         <div className='task-display'>
            {taskList} 
        </div>     
    );
}

export default Display;