import React, { useState, useEffect, useRef } from 'react';
import '../styles/Chatbot.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Chatbot = ({ onClose }) => {
    const [messages, setMessages] = useState([]);
    const [showOptions, setShowOptions] = useState(true);
    const chatMessagesRef = useRef(null);

    const addMessage = (text, isUser = false) => {
        const newMessage = { text, isUser };
        setMessages([...messages, newMessage]);
    };

    const handleOptionClick = (option) => {
        let response = '';
        switch (option) {
            case 'Contact Us':
                response = `Email: mariyavillamor@gmail.com`;
                break;
            case 'Technology Stack':
                response =
                    'I use the following technology stack:\n\n Frontend: Html, Css, Bootsrap, Sass, Javascript and React.js \n\n Backend: Node.js, Laravel \n\n Database: MySql';
                break;
            case 'Services':
                response = 'I offer the following services:\n- Front End Development\n- Graphic Design\n- Video Editing';
                break;
            default:
                response = 'I am sorry, I could not understand your request.';
        }

        addMessage(response);
    };

    useEffect(() => {
        // Display the initial welcome message
        addMessage('Hello! How can I assist you today?');
    }, []);

    useEffect(() => {
        // Check for overflow and remove earlier responses
        if (chatMessagesRef.current) {
            const chatMessages = chatMessagesRef.current;
            if (chatMessages.scrollHeight > chatMessages.clientHeight) {
                // Chat messages have overflowed
                setMessages((prevMessages) => prevMessages.slice(-3)); // Keep the last 3 messages
            }
        }
    }, [messages]);

    useEffect(() => {
        // Scroll to the bottom when new messages arrive
        if (chatMessagesRef.current) {
            const chatMessages = chatMessagesRef.current;
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="chatbot">
            <div className="bot-header">
                <img src="/favicon.png" alt="Bot" className="bot-avatar" />
                <p>Contact Us</p>
                <button className="close-button" onClick={onClose}>
                    <span className="close-icon">
                        <FontAwesomeIcon icon={faTimes} />
                    </span>
                </button>
            </div>
            <div className="chat-messages" ref={chatMessagesRef}>
                {messages.map((message, index) => (
                    <div key={index} className={`message-container ${message.isUser ? 'user-message' : 'bot-message'}`}>
                        <img src="/favicon.png" alt="Bot" className="profile-avatar" />
                        <div className={`message ${message.isUser ? 'user-message' : 'bot-message'}`}>
                            {message.text.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {i > 0 && <br />}
                                    {line}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {showOptions && (
                <div className="choices">
                    <button onClick={() => handleOptionClick('Contact Us')}>Contact Us</button>
                    <button onClick={() => handleOptionClick('Technology Stack')}>Technology Stack</button>
                    <button onClick={() => handleOptionClick('Services')}>Services</button>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
