import React from "react";
import ChatBot from "react-simple-chatbot";

function Dashboard(props) {
    const config = {
        width: "300px",
        height: "400px",
        floating: true
    };
    const steps = [{
            id: "Greet",
            message: "Hello, Welcome",
            trigger: "Ask Name"
        },
        {
            id: "Ask Name",
            message: "Please type your name?",
            trigger: "Waiting user input for name"
        },
        {
            id: "Waiting user input for name",
            user: true,
            trigger: "Asking welocome"
        },
        {
            id: "Asking welocome",
            message: "Hi {previousValue}, Glad to know you !!",
            trigger: "Done"
        },
        {
            id: "Done",
            message: "Have a great day !!",
            end: true
        }
    ];

    return <ChatBot steps = { steps } {...config }
    />;
}
export default Dashboard;
