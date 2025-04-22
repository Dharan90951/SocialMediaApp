import "./rightbar.css";
import NewPerson from "../newPerson/NewPerson";

export default function RightBar({ profile }) {
  const onlineFriends = [
    { id: 1, username: "John Willbert", profilePicture: "/assets/person/1.jpeg" },
    { id: 2, username: "Jane Mary", profilePicture: "/assets/person/2.jpeg" },
    { id: 3, username: "Mike Johnson", profilePicture: "/assets/person/3.jpeg" }
  ];

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="/assets/gift.png" />
          <span className="birthdayText">
            <b>Sarah Connor</b> and <b>3 other friends</b> have🥳 birthdays🎂  today🎉🎊
          </span>
        </div>
        <img className="rightBarAd" src="/assets/ad.png" alt="" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          {onlineFriends.map((friend) => (
            <li key={friend.id} className="rightBarFriend">
              <div className="rightBarProfileImgContainer">
                <img
                  className="rightBarProfileImg"
                  src={friend.profilePicture}
                  alt={friend.username}
                  onError={(e) => {
                    e.target.src = "/assets/person/1.svg";
                  }}
                />
                <span className="rightBarOnline"></span>
              </div>
              <span className="rightBarUsername">{friend.username}</span>
            </li>
          ))}
        </ul>
        <NewPerson />
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">Velachery,Chennai</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">India</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship:</span>
            <span className="rightBarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightBarFollowings">
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="rightBarFollowing">
              <img
                src={`/assets/person/${id}.jpeg`}
                alt=""
                className="rightBarFollowingImg"
                onError={(e) => {
                  e.target.src = `/assets/person/1.svg`;
                }}
              />
              <span className="rightBarFollowingName">Friend {id}</span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}