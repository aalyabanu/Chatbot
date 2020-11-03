import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const [userChoice, setUserChoice] = useState("")
    const history = useHistory();

    const choice = (e) => {
        console.log(e);
        setUserChoice(e)
     
    }

    const goToDashboard = () => {
        if(userChoice){
        history.push(`/dashboard/${userChoice}`)
        }
    }
    return (
        <>
          
                <p>
                    MoodBot is a chat bot that provides support to users who are having a difficult time.
        </p>
                <p>
                    MoodBot has a calming, friendly interface that lets users feel at ease.
                <br/>
                        MoodBot offers users a range of clickable options to access support, and interprets any messages that users send it.
                <br/>
                            MoodBot can direct users to helpful resources, play them soothing sounds, forward them to human support agents, or just have a gentle conversation with them.
                <br/>
        </p>

                        <div className="chatbot-app">
                            <h3 className="first-question">What would you like to talk about today?</h3>
                            <div className="choices">
                                <button onClick={() => choice('sleep')}>Better sleep</button>
                                <button onClick={() => choice('relaxation')}>Relaxation</button>
                                <button onClick={() => choice('mindfulness')}>Mindfulness</button>
                                <button onClick={() => choice('gratitude')}>Gratitude</button>
                                <button onClick={() => choice('stress')}>Stress Relief</button>
                                <button onClick={() => choice('anxiety')}>Anxiety Reduction</button>
                                <button onClick={() => choice('anger')}>Anger</button>
                                <button onClick={() => choice('loneliness')}>Loneliness</button>
                                <button onClick={() => choice('urgent')} className="urgent">Urgent Help</button>
                            </div>
                        </div>
                        <div>
                            <button className="continue-btn" onClick={goToDashboard}>Continue</button>
                        </div>
                    
        </>
    )

}

export default Home;