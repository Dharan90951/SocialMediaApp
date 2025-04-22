import "./post.css";
import { MoreVert, ThumbUp, ChatBubble } from "@mui/icons-material";
import defaultAvatar from "../../assets/default-avatar.svg";
import Comments from "../comments/Comments";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={post.profilePicture}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultAvatar;
              }}
              alt="Profile"
            />
            <span className="postUsername">{post.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          {post.img && (
            <img 
              className="postImg" 
              src={post.img} 
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
              }}
              alt="Post content" 
            />
          )}
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <ThumbUp className="likeIcon" />
            <span className="postLikeCounter">{post.likes} people like it</span>
          </div>
          <div className="postBottomRight">
            <ChatBubble className="commentIcon" />
            <span className="postCommentText">{post.comments} comments</span>
          </div>
        </div>
        <Comments postId={post.id} />
      </div>
    </div>
  );
}