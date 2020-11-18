import React from 'react'
import { useState } from 'react';

import ChatTrial from "../components/ChatTrial";
import ShortChat from "./chatLists/ShortChat";
import AnxietyChat from "./chatLists/AnxietyChat";
import SleepChat from "./chatLists/SleepChat";
import InfoBoard from "./InfoBoard"

const Home = () => {
    const [userChoice, setUserChoice] = useState("")
    const [choiceMade, setChoiceMade] = useState(false)

    const choice = (e) => {
        console.log(e);
        setUserChoice(e)
        setChoiceMade(true)
    }
    return (
        <>

<div className="md:flex">

            {(choiceMade) ? (
                <InfoBoard userChoice={userChoice} />
            ) : (
                    <div className=" mx-4 my-4">
                        <div className="grid sm:grid-cols-1 bg-blue-800 rounded px-4 py-4 ">


                            <h3 className="first-question">What would you like to talk about today?</h3>
                            <div className="choices">
                                <button className="bg-teal-500 hover:bg-teal-700 text-white  py-2 px-4 rounded" onClick={() => choice('sleep')}>Better sleep</button>
                                <button className="bg-teal-500 hover:bg-teal-700 text-white  py-2 px-4 rounded" onClick={() => choice('relaxation')}>Relaxation</button>
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
                <ChatTrial choiceMade={choiceMade} userChoice={userChoice}/>
               
            </div>
            </div>
        </>
    )

}

export default Home;