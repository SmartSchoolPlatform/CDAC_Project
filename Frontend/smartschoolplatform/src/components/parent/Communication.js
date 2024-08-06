import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth }  from '../../context/AuthContext'; // Adjust import based on your setup

function Communication() {
  const { user } = useAuth(); // Make sure this contains the parentId and classId
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [parentId, setParentId] = useState(user.userId); // Assuming parentId is available here
  const [classId, setClassId] = useState(''); // Assuming classId is available here

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(`http://localhost:8282/communications/parent/${parentId}`);
        const response1 = await axios.get(`http://localhost:8282/parents/${parentId}/class-ids`);
        console.log("\n\ndata:\n"+response1.data);
        //setParentId(response1);
        setClassId(response1.data);
        setMessages(response.data);
        console.log(user);
      } catch (error) {
        console.error('Error fetching messages', error);
      }
    };

    fetchMessages();
  }, [parentId]);

  const handleSendMessage = async () => {
    try {
      // Assuming classId is a single value, not an array
      const payload = {
        parentId: parentId, // Number
        classId: Array.isArray(classId) ? classId[0] : classId, // Convert array to single value if necessary
        message: newMessage, // String
      };
      console.log('Sending payload:', payload); // Log payload for debugging
  
      const response = await axios.post('http://localhost:8282/communications', payload);
      setMessages([...messages, response.data]);
      setNewMessage('');
    } catch (error) {
      console.error('Error sending message', error);
    }
  };
  
  
  
  
  

  return (
    <div className="container mt-4">
      <h2>Communication</h2>
      <div className="card p-3">
        <h4>Send a Message</h4>
        <textarea
          className="form-control mb-2"
          rows="3"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleSendMessage}>Send</button>
      </div>
      <div className="card p-3 mt-4">
        <h4>Messages</h4>
        {messages.length === 0 ? (
          <p>No new messages</p>
        ) : (
          <ul className="list-group">
            {messages.map((msg) => (
              <li key={msg.messageId} className="list-group-item">
                <p>{msg.message}</p>
                <small>{msg.timestamp}</small> {/* Add timestamp or other details if available */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Communication;