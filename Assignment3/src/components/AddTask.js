import React, { Component } from 'react';
import './addtask.css';

class AddTask extends Component{
    state = {
        title: '',
        time: '',
        description: ''
    }

    // object['property']
    handleChange = (event) => {
        // console.log([event.target.id]);
        this.setState({
            [event.target.id]: event.target.value,
        })
    }

    handleSubmit = (event) => {        
        event.preventDefault();
        this.props.addTask(this.state);   
        this.setState({
            title: '',
            time: '',
            description: ''
        })    
    }
    
    render(){
        return(
            <form className='add-form' onSubmit={this.handleSubmit}>
                <label htmlFor='title'>Task Name</label>
                <input type='text' id='title' placeholder='enter task .....' onChange={this.handleChange} value={this.state.title}></input> <br></br>

                <label htmlFor='time'>Timings</label>
                <input type='time' id='time' placeholder='select time.....' onChange={this.handleChange} value={this.state.time}></input> <br></br>

                <label htmlFor='description'>Description</label>
                <input type='text' id='description' placeholder='enter description .....' onChange={this.handleChange} value={this.state.description}></input> <br></br>

                <input type='submit' value='Add Task'></input>
            </form>           
        )
    }
}

export default AddTask;