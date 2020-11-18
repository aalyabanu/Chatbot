import React from 'react'
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#7b2cbf',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#1d4e89',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
    bubbleOptionStyle: '#fff'
  };

const ChatList = (props) => {
    const config = {
        width: "400px",
        height: "500px",
        floating: true,
        
        
        


    };
    const mychoice = props.userChoice;
    const choiceMade = props.choiceMade;
    console.log("choice status is: ", mychoice)

    const steps0 = [
        {
            id: "Greet",
            message: "Hello, I am MoodBot!",
            trigger: "Ask name"
        },
        {
            id: "Ask name",
            message: "What is your name?",
            botDelay: true,
            trigger: "Waiting user input for name"
        },
        {
            id: "Waiting user input for name",
            user: true,
            botDelay: true,
            trigger: "Asking welcome"
        },
        {
            id: "Asking welcome",
            message: "Hi {previousValue}! It's great to meet you !!",
            botDelay: true,
            trigger: "Direct to InfoBoard"
        },
        {
            id: "Direct to InfoBoard",
            message: "Have you gone through our InfoBoard? You might find some useful information there.",
            botDelay: true,
            trigger: "Right here"
        },
        {
            id: "Right here",
            message: "I am right here if you need me.",
            end: true
        },


    ]

    const stepsOther = [{
        id: "Greet",
        message: `How can I help you with ${mychoice}?`,
        trigger: "Done"
    },

    {
        id: "Done",
        message: "bye",
        end: true
    },
    ];

    const sleepSteps = [{
        id: "Greet",
        message: `Hey, tell me what's happening.`,
        trigger: "offer_options"
    },
    {

        id: "offer_options",
        options: [
            { value: 'problems', label: 'I have trouble sleeping.', trigger: 'sleep_issues' },
            { value: 'infos', label: 'I am looking for ways to improve sleep habits.', trigger: 'information' },
        ],
    },
    {
        id: "sleep_issues",
        message: "So, you're finding it hard to sleep? ",
        end: true

    },
    {
        id: 'information',
        message: 'have you read our infoboard on sleep?',
        end: true
    }
    ]

    const relaxationSteps = [{
        id: "Greet",
        message: `How can I help you?`,
        trigger: "offer_options"
    },
    {

        id: "offer_options",
        options: [
            { value: 'problems', label: 'I have trouble relaxing', trigger: 'sleep_issues' },
            { value: 'infos', label: 'I have looking for ways to relax', trigger: 'information' },
        ],
    },
    {
        id: "sleep_issues",
        message: "Are finding it hard to sleep? Have talked Seen a GP about it?",
        end: true

    },
    {
        id: 'information',
        message: 'have you read our infoboard on sleep?',
        end: true
    }
    ]


    // if (!choiceMade) {
    //     return <ChatBot steps={steps0} {...config} />
    // }
    // else if (mychoice == "sleep") {
    //     return <ChatBot steps={sleepSteps} {...config} />
    // }


        return (
             <ThemeProvider theme={theme} >
                {(!choiceMade) ? (
                    <div>
                        <ChatBot headerTitle='Conversation with MoodBot' steps={steps0}  {...config} />
                    </div>
                ) : (mychoice==='sleep')? (
                    <ChatBot headerTitle='MoodBot' steps={sleepSteps} {...config} bubbleOptionStyle={{
                        background:'#0899ba',
                        color:'white'
                        }} />
                ): (mychoice==='relaxation')? (<ChatBot steps={relaxationSteps} {...config} />) :(<ChatBot steps={stepsOther} {...config} />)
    }
           </ThemeProvider>
        )
}

export default ChatList;