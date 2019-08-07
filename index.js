import React, { Component } from 'react';
import { render } from 'react-dom';
import Message from './message';

// const App = function(){
//   return (<h1>Hello</h1>)
// }
// render(<App />, document.getElementById('root'));
export default class App extends Component {
  name = "santosh";
  constructor(props) {
    this.state = {
      surName: "swami",
      task: [],
      val: []
    }
  }

  add = () => {
    console.log(this.state.val);
    this.state.task.push(this.state.val);
    this.setState({ task: this.state.task });

  }
  handleDelete = (i) => {
    console.log("index", i);
    // this.state.task.splice(i, 1);
  }

  handleChange = (event) => {
    this.setState({ val: event.target.value });
    console.log("val", this.state.val);
  }
  render() {
    return (
      <div>
        <h1> My name is {this.name} {this.state.surName}</h1>
        <Message surName />
        <input type="text" onChange={this.handleChange} value={this.state.val} />
        <button onClick={this.add}>Add</button>
        <ul>Task list
            {this.state.task.map((x, i) => (
            <li>
              {x} <button onClick={this.handleDelete(i)}>delete {i}</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
render(<App />, document.getElementById('root'));
