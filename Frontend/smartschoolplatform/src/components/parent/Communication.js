import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './communication.css'; // Import your CSS file
import { useAuth } from '../../context/AuthContext';

function Communication() {
  const { user } = useAuth(); // Make sure this contains the parentId and classId
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [parentId, setParentId] = useState(user.username); // Assuming parentId is available here
  const [classId, setClassId] = useState(''); // Assuming classId is available here

  const fetchMessages = async () => {
    try {
      // Fetch the class ID
      const classIdResponse = await axios.get(`http://localhost:8282/parents/${parentId}/class-ids`);
      setClassId(classIdResponse.data);

      // Fetch messages for the class
      const messagesResponse = await axios.get(`http://localhost:8282/communications/class/${classIdResponse.data}`);
      
      // Filter messages by parentId
      const filteredMessages = messagesResponse.data.filter(msg => msg.receiverId === parseInt(parentId) || msg.senderId === parseInt(parentId));
      setMessages(filteredMessages);
    } catch (error) {
      console.error('Error fetching messages', error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [parentId]);

  const handleSendMessage = async () => {
    try {
      // Create payload
      const payload = {
        receiver_id: null, // This should be set based on the recipient
        sender_id: parentId, // Number
        classId: Array.isArray(classId) ? classId[0] : classId, // Convert array to single value if necessary
        message: newMessage, // String
      };
      
      // Send the message
      await axios.post('http://localhost:8282/communications', payload);
      
      // Fetch messages again to include the new message
      fetchMessages();

      // Clear the input field
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message', error);
    }
  };

  // Function to format the timestamp
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString(); // Formats to 'HH:MM:SS AM/PM'
  };

  return (
    <div className="communication-container">
      <h2>Communication</h2>
      <div className="send-message-container">
        <textarea
          rows="3"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      <div>
        {messages.length === 0 ? (
          <p>No new messages</p>
        ) : (
          <div>
            {messages.map((msg) => (
              <div
                key={msg.messageId}
                className={`message ${msg.senderId === parseInt(parentId) ? 'parent' : 'teacher'}`}
              >
                <div className="message-content">
                  <p>{msg.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Communication;
