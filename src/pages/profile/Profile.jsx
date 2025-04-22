import "./profile.css";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import LeftBar from "../../components/leftBar/LeftBar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightBar/RightBar";
export default function Profile() {
// Remove unused user declaration since it's not being used in the component
  const { username} = useParams();
  const userProfile = {
    coverPicture: "assets/post/1.jpeg",
    profilePicture: "assets/person/1.jpeg",
    username: username || "Dharan A",
    desc: "Frontend Developer | React Enthusiast | Coffee Lover",
    Followers: 123,
    Following: 456,
    posts: 24,
    location: "Velachery, Chennai",
    website: "https://github.com/Dharan90951"
  };

  return (
    <>
      <Navbar />
      <div className="profile">
        <LeftBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={userProfile.coverPicture}
                alt=""
              />
              <img
                className="profileUserImg"
                src={userProfile.profilePicture}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{userProfile.username}</h4>
              <span className="profileInfoDesc">{userProfile.desc}</span>
              <div className="profileStats">
                <div className="profileStat">
                  <span className="profileStatNumber">{userProfile.Followers}</span>
                  <span className="profileStatText">Followers</span>
                </div>
                <div className="profileStat">
                  <span className="profileStatNumber">{userProfile.Following}</span>
                  <span className="profileStatText">Following</span>
                </div>
              </div>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
}