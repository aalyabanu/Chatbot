import { Component } from 'react';

import axios from 'axios';
let sessionID = null;


class MessageParser extends Component {
        constructor(actionProvider, state) {
          super()
            this.state = {state}
            this.actionProvider = actionProvider;
          // State represents the chatbot state and is passed 
          // in at initalization. You can use it to read chatbot state
          // inside the messageParser
          
        }

        componentDidMount(){
          this.launchBot();
        }

        authenticatedCall = (method, url, data) => {
          console.log("sessionID:", sessionID);
          return axios({
                  method, url,
                  header: { session_id: sessionID },
                  data
          })
          .then(this.status)
          .catch((error) => {
                  /* Error handling might be incorrect */
                  // if (error.response.status === 403) {
                  //         return Promise.reject()
                  // } else { throw error; }
          })
  }

        parse = (message) => {
          if (sessionID === null) {
            console.log("getting ID");
            this.authenticatedCall('get', `https://cors-anywhere.herokuapp.com/https://chat-bot-ap.herokuapp.com/watson/session`)
            .then((response) => {
              sessionID = response.data.session_id              
            })
          }
          console.log("sessionID before sending message: ", sessionID);
          this.authenticatedCall('post', `https://cors-anywhere.herokuapp.com/https://chat-bot-ap.herokuapp.com/watson/message`, message)
          .then((response) => {
            return this.actionProvider.handleBotReply(response.output.generic.text);
          })
          const lowerCase = message.toLowerCase();
      
          if (
            lowerCase.includes("messageparser") ||
            lowerCase.includes("parse") ||
            lowerCase.includes("parser") ||
            lowerCase.includes("message parser")
          ) {
            return this.actionProvider.handleMessageParser();
          }
          return this.actionProvider.handleDefault();
        };

        /* REFERENCE COPY OF parse
        parse = (message) => {
          
          const lowerCase = message.toLowerCase();
      
          if (
            lowerCase.includes("messageparser") ||
            lowerCase.includes("parse") ||
            lowerCase.includes("parser") ||
            lowerCase.includes("message parser")
          ) {
            return this.actionProvider.handleMessageParser();
          }
          return this.actionProvider.handleDefault();
        };
        */
      }
      
      export default MessageParser;