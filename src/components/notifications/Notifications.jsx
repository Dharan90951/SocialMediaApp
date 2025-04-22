import { useState } from 'react';
import './notifications.css';
import { Close } from '@mui/icons-material';

export default function Notifications({ isOpen, onClose }) {
  const [notifications] = useState([
    {
      id: 1,
      type: 'like',
      content: 'John Doe liked your post',
      time: '5 mins ago',
      isRead: false
    },
    {
      id: 2,
      type: 'comment',
      content: 'Jane Smith commented on your photo',
      time: '15 mins ago',
      isRead: false
    },
    {
      id: 3,
      type: 'follow',
      content: 'Mike Johnson started following you',
      time: '1 hour ago',
      isRead: true
    }
  ]);

  if (!isOpen) return null;

  return (
    <div className="notifications">
      <div className="notificationsWrapper">
        <div className="notificationsHeader">
          <h3>Notifications</h3>
          <Close className="closeIcon" onClick={onClose} />
        </div>
        <div className="notificationsList">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`notificationItem ${!notification.isRead ? 'unread' : ''}`}
            >
              <div className="notificationContent">
                <p>{notification.content}</p>
                <span className="notificationTime">{notification.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}