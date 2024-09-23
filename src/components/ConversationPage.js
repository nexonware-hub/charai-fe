import React, { useEffect, useState } from 'react';
import { characters } from '../App';
import axios from 'axios';

function ConversationPage({ characterId }) {
    const [currentCharacter, setCurrentCharacter] = useState(null);
    const { title, description } = currentCharacter || {};
    const [messages, setMessages] = useState([
        { sender: 'User', text: 'Hello!' },
        { sender: title, text: description },
    ]);

    useEffect(() => {
        setCurrentCharacter(characters.find(c => c.characterId === characterId));
    }, [characterId]);

    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        console.log(title, newMessage);
        if (newMessage.trim()) {
            setMessages(prevMessages => [...prevMessages, { sender: 'User', text: newMessage }]);
            const url = localStorage.getItem('thread_id') 
                ? `http://192.168.1.6:8000/chat?character=${title}&message=${newMessage}&thread_id=${localStorage.getItem('thread_id')}` 
                : `http://192.168.1.6:8000/chat?character=${title}&message=${newMessage}`;

            axios.post(url).then(res => {
                setMessages(prevMessages => [...prevMessages, { sender: title, text: res.data.response }]);
                
                if (!localStorage.getItem('thread_id')) {
                    localStorage.setItem('thread_id', res.data.thread_id);
                }
            }).catch(err => alert(err));
            setNewMessage(''); // Clear input after sending
        }
    };

    useEffect(() => {
        document.getElementById('chat-area').scrollTop = document.getElementById('chat-area').scrollHeight;
    }, [messages])

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '80vh',
            width: '100%',
            backgroundColor: '#f1f1f1'
        }}>
            {/* Header */}
            <div style={{
                backgroundColor: '#2c3e50',
                color: '#ecf0f1',
                padding: '10px 20px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            }}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            {/* Chat area */}
            <div 
            id="chat-area"
            style={{
                flex: 1,
                padding: '20px',
                overflowY: 'auto',
                backgroundColor: '#fff',
            }}>
                {messages.map((message, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        justifyContent: message.sender === 'User' ? 'flex-end' : 'flex-start',
                        marginBottom: '10px',
                    }}>
                        <div style={{
                            maxWidth: '60%',
                            padding: '10px',
                            borderRadius: '10px',
                            backgroundColor: message.sender === 'User' ? '#3498db' : '#ecf0f1',
                            color: message.sender === 'User' ? '#fff' : '#333',
                        }}>
                            <p style={{ margin: 0 }}>{message.text}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Message input */}
            <div style={{
                display: 'flex',
                padding: '10px',
                backgroundColor: '#ecf0f1',
            }}>
                <input 
                    type="text" 
                    value={newMessage} 
                    onChange={(e) => setNewMessage(e.target.value)} 
                    style={{
                        flex: 1,
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                    }} 
                    placeholder="Type a message..."
                />
                <button 
                    onClick={handleSendMessage} 
                    style={{
                        marginLeft: '10px',
                        padding: '10px 20px',
                        backgroundColor: '#3498db',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default ConversationPage;
