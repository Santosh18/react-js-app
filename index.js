import React, { Component } from 'react';
import { render } from 'react-dom';
import Message from './message';

// const App = function(){
//   return (<h1>Hello</h1>)
// }
// render(<App />, document.getElementById('root'));
export default class App extends Component{
  name = "santosh";
  constructor(props){
    this.state =  {  surName : "swami",
              task : ['task1','task2'],
              val : ''
           }
  }
  
  handleClick = (event) => {
      console.log(event.target.value);
      console.log('event', event.target.value);
    // this.setState({
    // task : event.target.value
    // });
    //arr = [...event.target.value]
    //this.setState({this.state.val});
    //console.log("val ",val);
   // this.state.task.push(event.target.value);
     console.log(this.state.task);
    
  }
  handleDelete = (i) => {
    console.log(i);
  }
  
  handleChange = (event) => {
    this.setState({val :event.target.value});
  }
 render(){
    return (
      <div>
        <h1> My name is {this.name} {this.state.surName}</h1>
        <Message surName/> 
        <input type="text" onChange={this.handleChange} value = {this.state.val}/> 
        <button onClick={this.handleClick}>Add</button>
        <ul>Task list
            {this.state.task.map((x,i) => (
              <li>{x} <button onClick={this.handleDelete(i)}>delete {i}</button></li>
            ))}
        </ul>
      </div>
    )
 }
}
render(<App />, document.getElementById('root'));
