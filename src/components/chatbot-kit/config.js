import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

//import Overview from "../components/widgets/Overview/Overview";
//import MessageParser from "./messageParser";
//import ActionProviderDocs from "../components/widgets/ActionProvider/ActionProviderDocs";

const botName = "MoodBot";

const config = {
  botName: botName,
  lang: "no",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Hi I'm ${botName}. I'm a bot designed to help you with mental health struggles.`
    ),
    createChatBotMessage(
      "I'm an intelligent bot, so please let me know what you need.",
      {
        withAvatar: true,
        delay: 500,
        widget: "overview",
      }
    ),
  ],
  state: {
    gist: "",
  },
  customComponents: {},
  /*
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <Overview {...props} />,
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "messageParser",
      widgetFunc: (props) => <MessageParser {...props} />,
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "actionProviderDocs",
      widgetFunc: (props) => <ActionProviderDocs {...props} />,
      mapStateToProps: ["gist"],
    },
  ],
  */
};

export default config;