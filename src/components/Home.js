import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ChatList from "../components/ChatList";
import InfoBoard from "../components/InfoBoard"


const Home = () => {
    const [userChoice, setUserChoice] = useState("")
    const [choiceMade, setChoiceMade]=useState(false)
    const history = useHistory();

    const choice = (e) => {
        console.log(e);
        setUserChoice(e)
        setChoiceMade(true)


        // if (userChoice) {
        //     //history.push(`/dashboard/${userChoice}`)
        //     history.push({
        //         pathname: `/dashboard/${userChoice}`,
        //         data: {
        //             usersOption: userChoice,
        //             userId: '10'
        //         }
        //     })
        // }
    }
    return (
        <>

            {/* <p>
                MoodBot is a chat bot that provides support to users who are having a difficult time.
        </p>
            <p>
                MoodBot has a calming, friendly interface that lets users feel at ease.
                <br />
                        MoodBot offers users a range of clickable options to access support, and interprets any messages that users send it.
                <br />
                            MoodBot can direct users to helpful resources, play them soothing sounds, forward them to human support agents, or just have a gentle conversation with them.
                <br />
            </p> */}

            {(choiceMade)? (
                <InfoBoard/>
            ): (
<div className="grid grid-cols-2">
            <div className="col-span-1 my-6 bg-blue-800 rounded px-4 py-4 ">
               

                <h3 className="first-question">What would you like to talk about today?</h3>
                <div className="choices">
                    <button className="bg-teal-500 hover:bg-teal-700 text-white  py-2 px-4 rounded" onClick={() => choice('sleep')}>Better sleep</button>
                    <button className="bg-teal-500 hover:bg-teal-700 text-white  py-2 px-4 rounded"onClick={() => choice('relaxation')}>Relaxation</button>
                    <button className="bg-teal-500 hover:bg-teal-700 text-white  py-2 px-4 rounded" onClick={() => choice('mindfulness')}>Mindfulness</button>
                    <button className="bg-teal-500 hover:bg-teal-700 text-white  py-2 px-4 rounded" onClick={() => choice('gratitude')}>Gratitude</button>
                    <button className="bg-teal-500 hover:bg-teal-700 text-white  py-2 px-4 rounded" onClick={() => choice('stress')}>Stress Relief</button>
                    <button className="bg-teal-500 hover:bg-teal-700 text-white  py-2 px-4 rounded" onClick={() => choice('anxiety')}>Anxiety Reduction</button>
                    <button className="bg-teal-500 hover:bg-teal-700 text-white  py-2 px-4 rounded" onClick={() => choice('anger')}>Anger</button>
                    <button className="bg-teal-500 hover:bg-teal-700 text-white  py-2 px-4 rounded" onClick={() => choice('loneliness')}>Loneliness</button>
                    <button className="bg-red-500 hover:bg-red-700 text-white  py-2 px-4 rounded" onClick={() => choice('urgent')} >Urgent Help</button>
                </div>
            </div>
   
            </div>
            )}

<div className="col-span-2">
                <ChatList />
            </div>
        </>
    )

}

export default Home;