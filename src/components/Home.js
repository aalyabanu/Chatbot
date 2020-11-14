import React from 'react'
import { useState } from 'react';
import ChatList from "../components/ChatList";
import InfoBoard from "./InfoBoard"
import { ApiClient } from '../ApiClient';
import Chatbot from "react-chatbot-kit";
import config from "./chatbot-kit/config";
import actionProvider from "./chatbot-kit/actionProvider.js";
import messageParser from "./chatbot-kit/messageParser.js";

const apiClient = new ApiClient();

const Home = () => {
    const [userChoice, setUserChoice] = useState("")
    const [choiceMade, setChoiceMade] = useState(false)

    const choice = (e) => {
        console.log(e);
        setUserChoice(e)
        setChoiceMade(true)
    }

    const [showBot, toggleBot] = useState(false);

    const saveMessages = (messages) => {
        localStorage.setItem("chat_messages", JSON.stringify(messages));
    };

    const loadMessages = () => {
        const messages = JSON.parse(localStorage.getItem("chat_messages"));
        return messages;
    };

    apiClient.getSessionID(); //Call get session

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
                    <ChatList />
                </div>

                <div id="break"></div>

                <div className="chatbot-kit">
                    {showBot && (
                        <Chatbot
                            config={config}
                            actionProvider={actionProvider}
                            messageHistory={loadMessages()}
                            messageParser={messageParser}
                            saveMessages={saveMessages}
                        />
                    )}
                    <button onClick={() => toggleBot((prev) => !prev)}>Open Intelligent MoodBot</button>
                </div>
            </div>
        </>
    )

}

export default Home;