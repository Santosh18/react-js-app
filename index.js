import React, { Component } from 'react';
import { render } from 'react-dom';
import Message from './message';
import axios from 'axios';

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
      val: [],
      user : ''
    }
  }
  componentDidMount() {
    axios.get(`https://api.github.com/search/users?q=${name}`)
      .then(res => {
        const user = res.data;
        this.setState({ user });
      })
  }

  add = () => {
    // console.log(this.state.val);
    // this.state.task.push(this.state.val);
    // this.setState({ task: this.state.task });

    //for github users
     axios.get(`https://api.github.com/search/users?q=${this.state.val}`)
      .then(res => {
        
        ;
        console.log("Res",res.data);
        this.setState({ user : user.res.data });
      })

  }
  handleDelete = (e,i) => {
    console.log("index", i);
     this.state.task.splice(i, 1);
     this.setState({task : this.state.task});
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
        <h2>Task list</h2>
        <ul>
            {this.state.task.map((x, i) => (
            <li>
              {x} <button onClick={(e)=>this.handleDelete(e,i)}>Delete Task</button>
            </li>
          ))}
        </ul>
        <h1>Git user count by name{this.state.user.total_count}</h1>
      </div>
    )
  }
}
render(<App />, document.getElementById('root'));
