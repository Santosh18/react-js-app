import React, { Component } from 'react';
import { render } from 'react-dom';
import Message from './message';

// const App = function(){
//   return (<h1>Hello</h1>)
// }
// render(<App />, document.getElementById('root'));
export default class App extends Component{
   name = "santosh";
 render(){
    return <h1> My name is {this.name}</h1>;
    <Message />
 }
}
render(<App />, document.getElementById('root'))
