import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  constructor(props){
    super(props),
    this.state = {
      inputValue: ''
    }    
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  handleClick = () => {
    if(this.state.inputValue == 0){
      return;
    }
    this.props.concatMessage(this.state.inputValue);
    this.setState({
      inputValue:''
    })
  }
  render() {
    return (
      <footer className="ChatInput">
        <input  type="text" value={this.state.inputValue} onChange={this.handleChange}/>
        <button type="button" onClick={this.handleClick}>Send</button>
      </footer>
    );
  }
}

export default ChatInput;
