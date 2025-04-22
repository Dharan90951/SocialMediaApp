import { useState } from "react";
import Share from "../share/Share";
import Posts from "../posts/Posts";
import "./feed.css";

export default function Feed() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      desc: "Love For All, Hatred For None.",
      img: "/assets/post/1.jpeg",
      date: "5 mins ago",
      userId: 1,
      like: 32,
      comment: 9,
      username: "John Willbert",
      profilePicture: "/assets/person/4.jpeg"
    },
    {
      id: 2,
      desc: "Every moment is a fresh beginning.",
      img: "/assets/post/2.jpeg",
      date: "15 mins ago",
      userId: 2,
      like: 2,
      comment: 1,
      username: "Jane Mary",
      profilePicture: "/assets/person/2.jpeg"
    }
  ]);

  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const handleNewPost = (postData) => {
    const newPost = {
      id: posts.length + 1,
      ...postData,
      date: "just now",
      userId: 1,
      like: 0,
      comment: 0
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share onPost={handleNewPost} />
        <Posts posts={posts} onDelete={handleDeletePost} />
      </div>
    </div>
  );
}