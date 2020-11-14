import axios from 'axios'
import { Component} from  'react';
//for testing
//let url = "http://localhost:8000/watson"
let url = "https://chat-bot-ap.herokuapp.com/watson/"

export class ApiClient extends Component {
        state = {
                sessionID: null
        }

authenticatedCall = (method, url, data) => {
        return axios({
                method, url,
                header: { session_id: this.state.sessionID },
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

status(response) {
        if (response.status >= 200 && response.status < 300) {
          return Promise.resolve(response)
        } else { return Promise.reject(new Error(response.statusText)) }
      }

getSessionID = () => {
        // this.authenticatedCall('get', url)
        // .then((response) => {
        //         console.log(response)
        //         if(typeof response !== 'undefined'){
        //                 this.state.sessionID = response.header.session_id;
        //         }
        // })


        /*TEST */
        axios
      .get('https://chat-bot-ap.herokuapp.com/watson/session')
      .then(this.status)
      .then((res)=>{
              console.log(res);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
}

sendMessage = (message) => {
        this.authenticatedCall('post', url, message)
}

}