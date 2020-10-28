import React from 'react';
import "./style.css";
import Dashboard from "./components/Dashboard";
const App = () => {
    return (
        <>
            <div className="chatbot-app">
                <h3 className="first-question">What would you like to talk about today?</h3>
                <div className="choices">
                    <button>Better sleep</button>
                    <button>Relaxation</button>
                    <button>Mindfulness</button>
                    <button>Gratitude</button>
                    <button>Stress Relief</button>
                    <button>Anxiety Reduction</button>
                    <button>Keeping Fit</button>
                    <button>Loneliness</button>
                    <button className="urgent">Urgent Help</button>
                </div>
            </div>
            <div>
                <button className="continue-btn">Continue</button>
            </div>
         <Dashboard/>
        </>
    )
}
export default App;
