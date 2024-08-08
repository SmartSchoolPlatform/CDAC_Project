import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

function TeacherCommunication () {
    const [classes, setClasses] = useState([]);
    const [selectedClass, setSelectedClass] = useState('');
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [messageToReply, setMessageToReply] = useState(null);
    const [commUserDetails, setcommUserDetails]=useState([]);
    const { user } = useAuth();
    // Fetch classes for the teacher
    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await axios.get(`http://localhost:8282/subjects/classes/staff/${user.username}`);
                setClasses(response.data); // Adjust based on actual response structure
                console.log("class data:\n\n"+response.data);
                console.log("Profile Response Data:\n", JSON.stringify(response.data, null, 2));
            } catch (error) {
                console.error('Failed to fetch classes', error);
            }
        };

            fetchClasses();
        
    }, [user]);

    
    useEffect(() => {
        const fetchMessages = async () => {
            if (selectedClass) {
                try {
                    const response = await axios.get(`http://localhost:8282/communications/class/${selectedClass}`);
                    setMessages(response.data); 
                    console.log(response.data);
                    
                    response.data.map(m=>fetchuserDetails(m.senderId));

                } catch (error) {
                    console.error('Failed to fetch messages', error);
                }
            }
        };

        fetchMessages();
    }, [selectedClass]);

    
    const fetchuserDetails= async (senderId) =>{
        const response=await axios.get(`http://localhost:8282/users/${senderId}`);
        console.log(response.data);
        console.log("\n\n\n Role :\n");
        if (response.data.role==="Parent"){
            const parent=await axios.get(`http://localhost:8282/parents/${response.data.userId}`);
            console.log("Parent:\n"+parent.data);
        }else{
            const teacher=await axios.get(`http://localhost:8282/staff/${response.data.userId}`);
            console.log("Staff\n"+teacher.data);
        }
    }


    const handleSendMessage = async () => {
        try {
            const response = await axios.post('http://localhost:8282/communications', {
                sender_id: user.username,
                receiver_id: messageToReply ? messageToReply.senderId : null,
                classId: selectedClass,
                message: newMessage
            });

            // Update messages list after sending
            setMessages([...messages, response.data]);
            setNewMessage('');
            setMessageToReply(null);
        } catch (error) {
            console.error('Error sending message', error);
        }
    };

    return (
        <div>
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

            <div>
                <h2>Messages</h2>
                <ul>
                    {messages.map(msg => (
                        <li key={msg.messageId}>
                            {msg.message}
                            <button onClick={() => setMessageToReply(msg)}>Reply</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
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
