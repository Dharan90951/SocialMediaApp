import { useState } from 'react';
import './messages.css';
import { Close } from '@mui/icons-material';

export default function Messages({ isOpen, onClose }) {
  const [messages] = useState([
    {
      id: 1,
      sender: 'John Doe',
      content: 'Hey, how are you?',
      time: '5 mins ago',
      isRead: false,
      profilePicture: '/assets/person/4.jpeg'
    },
    {
      id: 2,
      sender: 'Jane Smith',
      content: 'Did you see my latest post?',
      time: '30 mins ago',
      isRead: false,
      profilePicture: '/assets/person/2.jpeg'
    },
    {
      id: 3,
      sender: 'Mike Johnson',
      content: 'Let\'s catch up soon!',
      time: '2 hours ago',
      isRead: true,
      profilePicture: '/assets/person/3.jpeg'
    }
  ]);

  if (!isOpen) return null;

  return (
    <div className="messages">
      <div className="messagesWrapper">
        <div className="messagesHeader">
          <h3>Messages</h3>
          <Close className="closeIcon" onClick={onClose} />
        </div>
        <div className="messagesList">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`messageItem ${!message.isRead ? 'unread' : ''}`}
            >
              <img
                src={message.profilePicture}
                alt={message.sender}
                className="messageSenderImg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/src/assets/default-avatar.svg';
                }}
              />
              <div className="messageContent">
                <span className="messageSender">{message.sender}</span>
                <p>{message.content}</p>
                <span className="messageTime">{message.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}