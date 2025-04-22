import { useState } from 'react';
import './newPerson.css';
import { Add } from '@mui/icons-material';

export default function NewPerson() {
  const [suggestions] = useState([
    {
      id: 1,
      username: 'Sarah Wilson',
      occupation: 'Software Developer',
      profilePicture: '/assets/person/5.jpeg',
      mutualFriends: 3
    },
    {
      id: 2,
      username: 'David Brown',
      occupation: 'Graphic Designer',
      profilePicture: '/assets/person/6.jpeg',
      mutualFriends: 2
    },
    {
      id: 3,
      username: 'Emily Davis',
      occupation: 'Marketing Manager',
      profilePicture: '/assets/person/7.jpeg',
      mutualFriends: 5
    }
  ]);

  const handleFollow = (id) => {
    // Handle follow action
    console.log(`Following user ${id}`);
  };

  return (
    <div className="newPerson">
      <h4 className="newPersonTitle">Suggested For You</h4>
      <div className="suggestionList">
        {suggestions.map((person) => (
          <div key={person.id} className="suggestionItem">
            <img
              src={person.profilePicture}
              alt={person.username}
              className="suggestionImg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/src/assets/default-avatar.svg';
              }}
            />
            <div className="suggestionInfo">
              <span className="suggestionName">{person.username}</span>
              <span className="suggestionOccupation">{person.occupation}</span>
              <span className="mutualFriends">{person.mutualFriends} mutual friends</span>
            </div>
            <button
              className="followButton"
              onClick={() => handleFollow(person.id)}
            >
              <Add />
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}