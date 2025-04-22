import { useState } from "react";
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions, Code } from "@mui/icons-material";
import defaultAvatar from "../../assets/default-avatar.svg";

export default function Share({ onPost }) {
  const [postText, setPostText] = useState('');
  const [file, setFile] = useState(null);
  const [tags, setTags] = useState([]);
  const [location, setLocation] = useState('');
  const [feeling, setFeeling] = useState('');
  const [codeSnippet, setCodeSnippet] = useState(null);

  const handleShare = () => {
    if (!postText.trim() && !file) return;
    
    // Create a post object with the current state
    const postData = {
      desc: postText,
      tags: tags.length ? tags : undefined,
      location: location || undefined,
      feeling: feeling || undefined,
      
    };

    // If there's a file, create a temporary URL for preview
    if (file) {
      postData.img = URL.createObjectURL(file);
    }

    // Send the post data to parent component
    onPost(postData);
    
    // Reset form
    setPostText('');
    setFile(null);
    setTags([]);
    setLocation('');
    setFeeling('');
    setCodeSnippet(null);
  
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFile(file);
  };

  const handleTagClick = () => {
    const tag = prompt('Enter a tag:');
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const handleLocationClick = () => {
    const loc = prompt('Enter location:');
    if (loc) setLocation(loc);
  };

  const handleFeelingClick = () => {
    const feel = prompt('How are you feeling?');
    if (feel) setFeeling(feel);
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img 
            className="shareProfileImg" 
            src="/assets/person/1.jpeg" 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultAvatar;
            }}
            alt="Profile" 
          />
          <input
            placeholder="What's in your mind?"
            className="shareInput"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <label htmlFor="file" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <PermMedia htmlColor="tomato" className="shareIcon"/>
                <span className="shareOptionText">{file ? 'Media Selected' : 'Photo or Video'}</span>
                <input
                  type="file"
                  id="file"
                  accept="image/*,video/*"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <div className="shareOption" onClick={handleTagClick}>
              <Label htmlColor="blue" className="shareIcon"/>
              <span className="shareOptionText">
                {tags.length ? (
                  <>
                    {`${tags.length} Tags`}
                    <span onClick={(e) => {
                      e.stopPropagation();
                      setTags([]);
                    }} style={{ marginLeft: '5px', cursor: 'pointer' }}>×</span>
                  </>
                ) : 'Tag'}
              </span>
            </div>
            <div className="shareOption" onClick={handleLocationClick}>
              <Room htmlColor="green" className="shareIcon"/>
              <span className="shareOptionText">
                {location ? (
                  <>
                    {location}
                    <span onClick={(e) => {
                      e.stopPropagation();
                      setLocation('');
                    }} style={{ marginLeft: '5px', cursor: 'pointer' }}>×</span>
                  </>
                ) : 'Location'}
              </span>
            </div>
            <div className="shareOption" onClick={handleFeelingClick}>
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
              <span className="shareOptionText">
                {feeling ? (
                  <>
                    {feeling}
                    <span onClick={(e) => {
                      e.stopPropagation();
                      setFeeling('');
    setCodeSnippet(null);
                    }} style={{ marginLeft: '5px', cursor: 'pointer' }}>×</span>
                  </>
                ) : 'Feelings'}
              </span>
            </div>
         
          </div>
          <button className="shareButton" onClick={handleShare}>Share</button>
        </div>
      </div>
    </div>
  );
}