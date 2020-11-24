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

    //SLEEP 
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
            trigger: "noSleepNone3"
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
            message: `Realising this may reduce worrying and aid sleep.`,
            trigger: "sleepTalkMoreQuestion"
        },

        {
            id: "tired",
            delay: setDelay,
            message: `It must be frustrating that you're always tired.`,
            trigger: "tiredAdvice"
        },
        {
            id: "tiredAdvice",
            delay: setDelay,
            message: `I can give you some advice that might help. What would you like to know about?`,
            trigger: "tiredAdviceOptions"
        },
        {
            id: "tiredAdviceOptions",
            delay: setDelay,
            options: [
                { value: 1, label: `Practical advice.`, trigger: 'tiredPractical' },
                { value: 2, label: `What might be causing it?`, trigger: 'tiredCause' },
                { value: 3, label: `Where can I learn more?`, trigger: 'noSleepMore' },
                { value: 4, label: `None of these.`, trigger: 'noSleepNone' },
            ]
        },
        {
            id: "tiredPractical",
            delay: setDelay,
            message: `Taking time to rest may help. If you're very busy, try to dedicate some time to let yourself rest and recharge each day.`,
            trigger: "noSleepNone"
        },
        {
            id: "tiredCause",
            delay: setDelay,
            message: `Having too much to do can cause you to feel tired all the time.`,
            trigger: "noSleepNone"
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
            message: `I can give you some advice that might help. What would you like to know about?`,
            trigger: "tiredAdviceOptions"
        },
        {
            id: "overSleepAdviceOptions",
            delay: setDelay,
            options: [
                { value: 1, label: `Practical advice.`, trigger: 'overSleepPractical' },
                { value: 2, label: `What might be causing it?`, trigger: 'overSleepCause' },
                { value: 3, label: `Where can I learn more?`, trigger: 'noSleepMore' },
                { value: 4, label: `None of these.`, trigger: 'noSleepNone' },
            ]
        },

        {
            id: "overSleepPractical",
            delay: setDelay,
            message: `If you're sleeping too much because of an inconsistent sleep pattern, it may help to wake up and go to bed at the same time every day.`,
            trigger: "noSleepNone"
        },
        {
            id: "overSleepCause",
            delay: setDelay,
            message: `Needing lots of sleep might indicate an underlying health issue, such as anaemia. Just in case, it's a good idea to contact a health professional.`,
            trigger: "noSleepNone"
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
            message: `High stress levels can make it hard to sleep through the night.`,
            trigger: "noSleepPractical"
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
                { value: 2, label: `No`, trigger: 'finish' },
                { value: 3, label: `I have more questions`, trigger: 'sleepSympathy2' },
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
                { value: 3, label: `I have more questions about sleep`, trigger: 'sleepSympathy2' },
            ]
        },
        {
            id: "finish",
            delay: setDelay,
            message: "I hope our chat has been helpful, and I wish you all the best.",
            end: true
        },
    ];

    const relaxationSteps = [
        {
            id: "relaxSympathy",
            message: "Tell me what's troubling you.",
            trigger: "relaxDetailOptions"
        },
        {
            id: "relaxDetailOptions",
            options: [
                { value: 1, label: `I am finding it hard to relax`, trigger: 'relaxStruggles' },
                { value: 2, label: `I don't know how to relax!`, trigger: 'relaxIdeas' },

            ]
        },
        {
            id: "relaxStruggles",
            message: `We live in a world that makes it really hard to unwind and often times we are working too hard at relaxing. If your current attempt to relax is not working, maybe its time to learn a different way to relax.`,
            botDelay: true,
            trigger: "offerOptions"
        },
        {
            id: "offerOptions",
            message: `Would you like me to share some tips on how to relax?`,
            botDelay: true,
            trigger: "userConsent"
        },
        {
            id: "userConsent",
            options: [
                { value: 1, label: `Yes`, trigger: 'waysToRelax' },
                { value: 2, label: `No`, trigger: 'finish' }
            ],
        },
        {
            id: "waysToRelax",
            message: `The key to feeling relaxed is not stressing too much about it. Pick an activity that helps to lower your heartbeat and calm you down. Or learn something that has reputation for calming such as meditation, art etc. The key is to settle your mind and not to stimulate it too much. `,
            botDelay: true,
            trigger: "relaxTalkMoreQuestion"
        },
        {
            id: "relaxIdeas",
            message: `If you are looking for ways to relax, you may find some good ways in the analog world. You can try yoga, going for a run, practicing an instrument, art or any other activities that has reputation for calming you down.`,
            botDelay: true,
            trigger: "offerOptions"
        },

        {
            id: "relaxTalkMoreQuestion",
            message: `Would you like to tell me more about your problem with ${mychoice}? I won't have anything to say, but I am a very good listener.`,
            trigger: "talkMoreOptions"
        },
        //end of relax section
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
    ]

    //ANXIETY
    const anxSteps = [
        {
            id: "anxietySympathy",
            message: "I'm sorry that you're having trouble with anxiety. Can you tell me what the problem is in more detail?",
            trigger: "anxietyDetailOptions"
        },
        {
            id: "anxietyDetailOptions",
            options: [
                { value: 1, label: `I get over-anxious about things that worry me`, trigger: 'veryAnxious' },
                { value: 2, label: `I'm always anxious`, trigger: 'alwaysAnxious' },
                { value: 3, label: `I have episodes of extreme anxiety`, trigger: 'panic' },
            ]
        },
        {
            id: "veryAnxious",
            message: `It must be difficult to have such strong anxious feelings. Perhaps I can help.`,
            trigger: "veryAnxiousAdvice"
        },
        {
            id: "veryAnxiousAdvice",
            message: `It's a good idea to seek medical advice for over-anxious feelings. In the meantime, it may help to do a breathing exercise for ten minutes when you find it difficult to cope.`,
            trigger: "anxiousTalkMoreQuestion"
        },
        {
            id: "alwaysAnxious",
            message: `It must be frustrating that you're always feeling anxious. Perhaps I can help.`,
            trigger: "alwaysAnxiousAdvice"
        },
        {
            id: "alwaysAnxiousAdvice",
            message: `Always feeling anxious might indicate an anxiety disorder. It's a good idea to seek medical advice. In the meantime, it may help to exercise for half an hour a day.`,
            trigger: "anxiousTalkMoreQuestion"
        },
        {
            id: "panic",
            message: `It must be very difficult to cope with bouts of intense anxiety. Perhaps I can help.`,
            trigger: "panicAdvice"
        },
        {
            id: "panicAdvice",
            message: `Episodes of intense anxiety may indicate a panic disorder. Although they are often scary, they do not indicate a physical problem. It's a good idea to seek medical advice. In the meantime, it may help to carry with you something you can use to distract yourself during an episode.`,
            trigger: "anxiousTalkMoreQuestion"
        },
        {
            id: "anxiousTalkMoreQuestion",
            message: `Would you like to tell me more about your problem with anxiety? I won't have anything to say, but I am a very good listener.`,
            trigger: "talkMoreOptions"
        },
        //end of anxiety section
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
        <ThemeProvider theme={theme} >
            {(!choiceMade) ? (
                <div>
                    <ChatBot headerTitle='Conversation with MoodBot' steps={steps0}  {...config} />
                </div>
            ) : (mychoice === 'sleep') ? (
                <ChatBot headerTitle='MoodBot' steps={sleepSteps} {...config} bubbleOptionStyle={{
                    background: '#0899ba',
                    color: 'white'
                }} />
            ) : (mychoice === 'relaxation') ? (<ChatBot steps={relaxationSteps} {...config} bubbleOptionStyle={{
                background: '#0899ba',
                color: 'white'
            }} />) : (mychoice === 'anxiety') ? (<ChatBot steps={anxSteps} {...config} bubbleOptionStyle={{
                background: '#0899ba',
                color: 'white'
            }} />) : (<ChatBot steps={stepsOther} {...config} />)
            }
        </ThemeProvider>
    )
}

export default ChatList;