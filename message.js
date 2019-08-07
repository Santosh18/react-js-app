import React, {Component} from 'react';

export default class Message extends React.Component{

    render(){
      return (<h2> Git user search and {this.props.dataFromParent}</h2>);
    }
  
}