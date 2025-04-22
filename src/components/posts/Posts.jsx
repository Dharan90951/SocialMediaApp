import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts, onDelete }) {
    return (
      <div className="posts">
        {posts.map((p) => (
          <div key={p.id} className="postContainer">
            <Post post={p} onDelete={onDelete} />
          </div>
        ))}
      </div>
    );
}