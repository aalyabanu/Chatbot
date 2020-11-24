import React from 'react'
import ChatBot from "react-simple-chatbot";

const GratitudeChat = () => {
 const   config = {
        width: "300px",
        height: "400px",
        floating: true
    };
    const setDelay = 3000;
    const gratitudeSteps = [
        {
            id: "gratitudeIntro",
            message: "Gratitude is a part of all our lives. But it can also help us feel better.",
            delay: setDelay,
            trigger: "gratitude2"
        },
        {
            id: "gratitude2",
            message: "Expressing gratitude regularly can improve your mood and make you happier.",
            delay: setDelay,
            trigger: "gratitude3",
        },
        {
            id: "gratitude3",
            message: `It can also make you more optimistic and give you a more positive outlook on life.`,
            delay: setDelay,
            trigger: "gratitude4"
        },
        {
            id: "gratitude4",
            message: `Practicing gratitude can help you and those around you feel more connected and loved.`,
            delay: setDelay,
            trigger: "gratitude5"
        },
        {
            id: "gratitude5",
            message: `Gratitude can even improve your physical health, by making you more likely to be active and take care of yourself.`,
            delay: setDelay,
            trigger: "gratitude6"
        },
        {
            id: "gratitude6",
            message: `Sounds great, doesn't it? You might be wondering how you can do all this just by being grateful.`,
            delay: setDelay,
            trigger: "gratitude7"
        },
        {
            id: "gratitude7",
            message: `You can start small and work your way up.`,
            delay: setDelay,
            trigger: "gratitude8"
        },
        {
            id: "gratitude8",
            message: `Here are some ways to start practicing gratitude.`,
            delay: setDelay,
            trigger: "gratitude9"
        },
        {
            id: "gratitude9",
            message: `At the start of the day, think back to yesterday and write down one thing you feel grateful for.`,
            delay: setDelay,
            trigger: "gratitude10"
        },
        
        {
            id: "gratitude10",
            message: "When you feel frustrated, take a moment and think about something you're grateful for. It may re-energise you.",
            delay: setDelay,
            trigger: "gratitude11"
        },
        {
            id: "gratitude11",
            message: "When you are with family or friends, each of you can share something you're grateful for in general, and one thing about today.",
            delay: setDelay,
            trigger: "gratitude12"
        },
        {
            id: "gratitude12",
            message: "Show the people around you your gratitude by writing them a note.",
            delay: setDelay,
            trigger: "gratitude13"
        },
        {
            id: "gratitude13",
            message: "I hope our chat has been helpful, and I wish you all the best.",
            end: true
        },
    ];

    
    return (
        <div>
            <ChatBot steps={gratitudeSteps} {...config} />
        </div>
    )
}
export default GratitudeChat;