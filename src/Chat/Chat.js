import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';
import { ROLE } from '../constants'

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  concatMessage = (msg) => {
    const message = {
      text:msg,
      role:ROLE.CUSTOMER,
      tags:msg
    }
    let answerArray = [];
    answersData.find((answer) => answer.tags.forEach(      
      (tag) => {
        if(msg.includes(tag)){
          answerArray.push(answer);
        }
      }
    ));
    this.setState({
      messages: [...this.state.messages,message,...answerArray]
    });
  }

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput concatMessage={this.concatMessage}/>
      </main>
    );
  }
}

export default Chat;
