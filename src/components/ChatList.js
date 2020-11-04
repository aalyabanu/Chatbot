import React from 'react'
import ChatBot from "react-simple-chatbot";

const ChatList = () => {
 const   config = {
        width: "300px",
        height: "400px",
        floating: true
    };
//the original conversation
  const  steps = [{
        id: "Greet",
        message: "Hello, and welcome to MoodBot!",
        trigger: "Ask name"
    },
    {
        id: "Ask name",
        message: "What is your name?",
        trigger: "Waiting user input for name"
    },
    {
        id: "Waiting user input for name",
        user: true,
        trigger: "Asking welcome"
    },
    {
        id: "Asking welcome",
        message: "Hi {previousValue}! It's great to meet you !!",
        trigger: "Ask topic"
    },
    {
        id: "Ask topic",
        message: "What can I help you with today, {previousValue}?",
        trigger: "Options"
    },
    {
        id: "Options",
        options: [
            { value: 1, label: 'I have high stress levels', trigger: 'Stress' },
            { value: 2, label: `I'm feeling anxious`, trigger: 'Anxiety' },
            { value: 3, label: `I am sad and I don't know why`, trigger: 'Sad' },
        ]
    },
    {
        id: "Stress",
        message: "Stress is a problem that many people grapple with. It may help to take some time for yourself and listen to some calming music.",
        trigger: "Done"
    },
    {
        id: "Anxiety",
        message: "Anxiety is a natural emotion. However, it can be distressing when there's too much of it. It may help to perform some breathing exercises.",
        trigger: "Done"
    },
    {
        id: "Sad",
        message: "Sadness is a natural part of human life. However, if you're feeling sad for no reason you might benefit from some support. Head to the resources page to read about what to do next.",
        trigger: "Done"
    },
    {
        id: "Done",
        message: "I hope our chat has been helpful, and I wish you all the best.",
        end: true
    },
    ];
//the conversation from the sleep conversation map
    const sleepSteps = [
            {
            id: "welcome",
            message: "Hello. I am MoodBot, a robot designed to help you with mental health struggles. I am a young bot, so please be patient with me.",
            trigger: "struggle"
        },

        {
            id: "struggle",
            message: "What are you struggling with?",
            trigger: "struggleOptions"
        },
        {
            id: "struggleOptions",
            options: [
                { value: 1, label: 'sleep', trigger: 'confirmSleep' }
              ]
        },
        {
            id: "confirmSleep",
            message: "It sounds like you're having trouble with sleep. Is that right?",
            trigger: "confirmSleepOptions"
        },
        {
            id: "confirmSleepOptions",
            options: [
                { value : 1, label: 'Yes', trigger: 'sleepSympathy' },
                { value : 2, label: 'No', trigger: 'return' }
              ]
        },
        {
            id: "return",
            message: "Okay. I'm a bit confused, so let's go back to the beginning.",
            trigger: "welcome"
        },
        {
            id: "sleepSympathy",
            message: "I'm sorry that you're having trouble with sleep. Can you tell me what the problem is in more detail?",
            trigger: "sleepDetailOptions"
        },
        {
            id: "sleepDetailOptions",
            options: [
                { value: 1, label: `I can't sleep`, trigger: 'noSleep' },
                { value: 2, label: `I'm always tired`, trigger: 'tired' },
                { value: 3, label: `I'm sleeping too much`, trigger: 'overSleep' },
                { value: 4, label: `I wake up in the night`, trigger: 'waking' },
              ]
        },
        {
            id: "noSleep",
            message: `It must be frustrating that you can't sleep. Perhaps I can help.`,
            trigger: "noSleepAdvice"
        },
        {
            id: "noSleepAdvice",
            message: `High stress levels can make it hard to sleep. It might help to do a breathing exercise for ten minutes before bed. Read more about managing stress here:`,
            trigger: "sleepTalkMoreQuestion"
        },
        {
            id: "tired",
            message: `It must be frustrating that you're always tired. Perhaps I can help.`,
            trigger: "tiredAdvice"
        },
        {
            id: "tiredAdvice",
            message: `Having too much to do can cause you  to feel tired all the time. It might help to prioritise your responsibilities and ask for help from those around you. Read more about exhaustion here: `,
            trigger: "sleepTalkMoreQuestion"
        },
        {
            id: "overSleep",
            message: `It must be difficult to sleep too much. Perhaps I can help.`,
            trigger: "overSleepAdvice"
        },
        {
            id: "overSleepAdvice",
            message: `Needing lots of sleep might indicate an underlying health issue, such as anaemia. Just in case, it's a good idea to contact a health professional.`,
            trigger: "sleepTalkMoreQuestion"
        },
        {
            id: "waking",
            message: `It must be difficult to keep waking up in the night. Perhaps I can help.`,
            trigger: "wakingAdvice"
        },
        {
            id: "wakingAdvice",
            message: `High stress levels can make it hard to sleep through the night. It might help to do a breathing exercise for ten minutes before bed. Read more about managing stress here:`,
            trigger: "sleepTalkMoreQuestion"
        },
        {
            id: "sleepTalkMoreQuestion",
            message: `Would you like to tell me more about your problem with sleep? I won't have anything to say, but I am a very good listener.`,
            trigger: "talkMoreOptions"
        },
        {
            id: "talkMoreOptions",
            options: [
                { value: 1, label: `Yes`, trigger: 'talkMore' },
                { value: 2, label: `No`, trigger: 'finish' }
              ],
        },
        {
            id: "talkMore",
            user: true,
            trigger: "finishQuestion"
        },
        {
            id: "finishQuestion",
            options: [
                { value: 1, label: `I want to tell you more.`, trigger: 'talkMore' },
                { value: 2, label: `OK, I've finished talking about this.`, trigger: 'finish' },
              ]
        },
        {
            id: "finish",
            message: "I hope our chat has been helpful, and I wish you all the best.",
            end: true
        },
    ];

    return (
        <div>
            <ChatBot steps={sleepSteps} {...config} />
        </div>
    )
}
export default ChatList;