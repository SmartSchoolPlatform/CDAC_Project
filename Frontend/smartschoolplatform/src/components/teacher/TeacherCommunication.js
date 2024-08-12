import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import './TeacherCommunication.css';

function TeacherCommunication() {
    const [classes, setClasses] = useState([]);
    const [selectedClass, setSelectedClass] = useState('');
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [messageToReply, setMessageToReply] = useState(null);
    const [userDetails, setUserDetails] = useState({});
    const { user } = useAuth();

    // Fetch classes for the teacher
    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await axios.get(`http://localhost:8282/subjects/classes/staff/${user.username}`);
                setClasses(response.data);
            } catch (error) {
                console.error('Failed to fetch classes', error);
            }
        };

        fetchClasses();
    }, [user]);

    // Fetch messages for the selected class
    useEffect(() => {
        const fetchMessages = async () => {
            if (selectedClass) {
                try {
                    const response = await axios.get(`http://localhost:8282/communications/class/${selectedClass}`);
                    setMessages(response.data);

                    const users = await Promise.all(response.data.map(msg =>
                        axios.get(`http://localhost:8282/users/${msg.senderId}`)
                    ));
                    const userDetails = {};
                    users.forEach((res) => {
                        userDetails[res.data.userId] = res.data;
                    });
                    setUserDetails(userDetails);
                } catch (error) {
                    console.error('Failed to fetch messages', error);
                }
            }
        };

        fetchMessages();
    }, [selectedClass]);

    // Handle sending a new message
    const handleSendMessage = async () => {
        try {
            const response = await axios.post('http://localhost:8282/communications', {
                sender_id: user.username,
                receiver_id: messageToReply ? messageToReply.senderId : null,
                classId: selectedClass,
                message: newMessage
            });

            setMessages([...messages, response.data]);
            setNewMessage('');
            setMessageToReply(null);
        } catch (error) {
            console.error('Error sending message', error);
        }
    };

    // Get sender name based on user details
    const getSenderName = (senderId) => {
        const user = userDetails[senderId];
        if (user) {
            return user.role === 'Parent' ? `Parent ${user.userId}` : `Teacher ${user.userId}`;
        }
        return 'Unknown';
    };

    return (
        <div className="teacher-communication">
            <h1>Teacher Communication</h1>
            <div>
                <label>Select Class:</label>
                <select onChange={(e) => setSelectedClass(e.target.value)} value={selectedClass}>
                    <option value="">Select Class</option>
                    {classes.map(cls => (
                        <option key={cls.classes.classId} value={cls.classes.classId}>{cls.classes.className}</option>
                    ))}
                </select>
            </div>

            <div className="message-list">
                <h2>Messages</h2>
                <ul>
                    {messages.map(msg => (
                        <li
                            key={msg.messageId}
                            className={msg.senderId === user.username ? 'sent' : 'received'}
                            onClick={() => setMessageToReply(msg)}
                        >
                            <strong>{getSenderName(msg.senderId)}:</strong>
                            <p>{msg.message}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="message-input">
                {messageToReply && (
                    <div className="reply-preview">
                        <strong>Replying to:</strong>
                        <p>{getSenderName(messageToReply.senderId)}: {messageToReply.message}</p>
                    </div>
                )}
                <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default TeacherCommunication;
