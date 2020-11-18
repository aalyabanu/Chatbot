import React from 'react'
import ChatBot from "react-simple-chatbot";

const SleepChat = () => {
 const   config = {
        width: "300px",
        height: "400px",
        floating: true
    };
    const setDelay = 3000;
    const sleepSteps = [
        {
            id: "sleepSympathy",
            message: "I'm sorry to hear that you're having trouble with sleep.",
            trigger: "sleepSympathy2"
        },
        {
            id: "sleepSympathy2",
            delay: setDelay,
            message: "Sleeping trouble can be very difficult. Could you give me some more detail?",
            trigger: "sleepDetailOptions"
        },
        {
            id: "sleepDetailOptions",
            delay: setDelay,
            options: [
                { value: 1, label: `I can't sleep`, trigger: 'noSleep' },
                { value: 2, label: `I'm always tired`, trigger: 'tired' },
                { value: 3, label: `I'm sleeping too much`, trigger: 'overSleep' },
                { value: 4, label: `I wake up in the night`, trigger: 'waking' },
              ]
        },
        {
            id: "noSleep",
            delay: setDelay,
            message: `It must be frustrating that you can't sleep.`,
            trigger: "noSleepAdvice"
        },
        {
            id: "noSleepAdvice",
            delay: setDelay,
            message: `I can give you some advice that might help. What would you like to know about?`,
            trigger: "noSleepAdviceOptions"
        },
        {
            id: "noSleepAdviceOptions",
            delay: setDelay,
            options: [
                { value: 1, label: `Practical advice.`, trigger: 'noSleepPractical' },
                { value: 2, label: `What might be causing it?`, trigger: 'noSleepCause' },
                { value: 3, label: `Where can I learn more?`, trigger: 'noSleepMore' },
                { value: 4, label: `None of these.`, trigger: 'noSleepNone' },
              ]
        },
        {
            id: "noSleepPractical",
            delay: setDelay,
            message: `It might help to do a breathing exercise for ten minutes before bed. Slowly breathe in and out. This can lower stress levels and make sleep easier.`,
            trigger: "noSleepNone"
        },
        {
            id: "noSleepCause",
            delay: setDelay,
            message: `High stress levels can make it hard to sleep.`,
            trigger: "noSleepNone"
        },
        {
            id: "noSleepMore",
            delay: setDelay,
            message: `You can read more about sleep through our InfoBoard.`,
            trigger: "noSleepNone"
        },
        {
            id: "noSleepNone",
            delay: setDelay,
            message: `It might help to know that you're not alone. In the UK, around one-fifth of people have trouble sleeping.`,
            trigger: "noSleepNone2"
        },
        {
            id: "noSleepNone2",
            delay: setDelay,
            message: `Sometimes not sleeping makes people worry about being tired the next day, and the worry makes it harder to sleep.`,
            trigger: "sleepTalkMoreOptions"
        },
        {
            id: "noSleepNone3",
            delay: setDelay,
            message: `In these cases, it may help to remember that even if you can't sleep, you can rest your mind and body.`,
            trigger: "noSleepNone4"
        },
        {
            id: "noSleepNone4",
            delay: setDelay,
            message: `Realising this may reduce worrying and aid relaxation.`,
            trigger: "sleepTalkMoreOptions"
        },

        {
            id: "tired",
            delay: setDelay,
            message: `It must be frustrating that you're always tired. Perhaps I can help.`,
            trigger: "tiredAdvice"
        },
        {
            id: "tiredAdvice",
            delay: setDelay,
            message: `Having too much to do can cause you  to feel tired all the time. It might help to prioritise your responsibilities and ask for help from those around you. Read more about exhaustion here: `,
            trigger: "sleepTalkMoreQuestion"
        },
        {
            id: "overSleep",
            delay: setDelay,
            message: `It must be difficult to sleep too much. Perhaps I can help.`,
            trigger: "overSleepAdvice"
        },
        {
            id: "overSleepAdvice",
            delay: setDelay,
            message: `Needing lots of sleep might indicate an underlying health issue, such as anaemia. Just in case, it's a good idea to contact a health professional.`,
            trigger: "sleepTalkMoreQuestion"
        },
        {
            id: "waking",
            delay: setDelay,
            message: `It must be difficult to keep waking up in the night. Perhaps I can help.`,
            trigger: "wakingAdvice"
        },
        {
            id: "wakingAdvice",
            delay: setDelay,
            message: `High stress levels can make it hard to sleep through the night. It might help to do a breathing exercise for ten minutes before bed. Read more about managing stress here:`,
            trigger: "sleepTalkMoreQuestion"
        },
        {
            id: "sleepTalkMoreQuestion",
            delay: setDelay,
            message: `Would you like to tell me more about your problem with sleep? I won't have anything to say, but I am a very good listener.`,
            trigger: "talkMoreOptions"
        },
        {
            id: "talkMoreOptions",
            delay: setDelay,
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
            delay: setDelay,
            options: [
                { value: 1, label: `I want to tell you more.`, trigger: 'talkMore' },
                { value: 2, label: `OK, I've finished talking about this.`, trigger: 'finish' },
              ]
        },
        {
            id: "finish",
            delay: setDelay,
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
export default SleepChat;