import React from "react";
import { Link } from 'react-router-dom'
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import './CustomChatBot.css'

export default function CustomChatbot(props) {
  const config = {
    width: "300px",
    height: "400px",
    floating: true,
  };

  const theme = {
    background: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    headerBgColor: "#8f5e59",
    headerFontColor: "#fff",
    headerFontSize: "25px",
    botBubbleColor: "#8f5e59",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4c4c4c",
  };

  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to my web portfolio!",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "What is your name?",
      trigger: "Awaiting user input for name",
    },
    {
      id: "Awaiting user input for name",
      user: true,
      trigger: "Nice to meet you",
    },
    {
      id: "Nice to meet you",
      message: "Hi {previousValue}, encantado (nice to meet you)!", 
      trigger: "Displaying navigation options",
    },
    {
      id: "Displaying navigation options",
      options: [
        {
          value: "work",
          label: <Link className="chatbot-link" to='/details'>"I want to see some projects"</Link>,
          trigger: "Done"
        },
        {
          value: "about",
          label: <Link to='/about'>"I want to get to know you better"</Link>,
          trigger: "Done"
        },
        {
          value: "contact",
          label: <Link to='/contact'>"I want to contact you"</Link>,
          trigger: "Done"
        },
      ],
    },
    {
      id: "Done",
      message: "Have a great day !!",
      end: true,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} {...config} />;
    </ThemeProvider>
  );
}
