import React from 'react';
import Display from './components/Display';
import Navbar from './components/Navbar';
import AddTask from './components/AddTask';
import './App.css';

class App extends React.Component {
  state = { 
    heading: 'TODO Planner',
    taskDetails:  []
   }

    addTask = (task) => {
     console.log('Inside App.js', task);
     task.id = Math.ceil(Math.random() * 100);  
     let taskDetails = [...this.state.taskDetails, task];
     console.log('New Task Details Array', taskDetails);
     this.setState({
        taskDetails
     })
   }

   deleteTask = (id) => {
      let newTask = this.state.taskDetails.filter( task => {
        return task.id !== id;
      })

      this.setState({
        taskDetails: newTask
      })
   }
   
   


  render(){
    return (
      <div className="App">
        <Navbar heading={this.state.heading}></Navbar>
        <Display taskDetails={this.state.taskDetails} deleteTask={this.deleteTask} editTask={this.editTask}></Display>
        <AddTask addTask ={this.addTask}></AddTask>
      </div>
    );
  }  
}

export default App;
