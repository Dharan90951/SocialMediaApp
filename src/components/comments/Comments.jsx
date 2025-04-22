import "./comments.css";
import { useState } from "react";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([
    {
      id: 1,
      desc: "Great post! Thanks for sharing!",
      userId: 2,
      username: "Jane Smith",
      profilePicture: "/assets/person/2.jpeg",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      desc: "This is really interesting!",
      userId: 3,
      username: "Alex Johnson",
      profilePicture: "/assets/person/3.jpeg",
      timestamp: "1 hour ago"
    }
  ]);

  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        desc: newComment,
        userId: 1, // Current user ID
        username: "John Doe", // Current user name
        profilePicture: "/assets/person/1.jpeg",
        timestamp: "just now"
      };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };

  return (
    <div className="comments">
      <form className="commentForm" onSubmit={handleSubmit}>
        <img
          className="commentProfileImg"
          src="/assets/person/1.jpeg"
          alt=""
        />
        <input
          type="text"
          placeholder="Write a comment..."
          className="commentInput"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit" className="commentSubmitButton">
          Post
        </button>
      </form>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <img
            className="commentProfileImg"
            src={comment.profilePicture}
            alt={comment.username}
          />
          <div className="commentContent">
            <div className="commentText">
              <span className="commentUsername">{comment.username}</span>
              {comment.desc}
            </div>
            <span className="commentTimestamp">{comment.timestamp}</span>
          </div>
        </div>
      ))}
    </div>
  );
}