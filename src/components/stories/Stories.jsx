import "./stories.css";

export default function Stories() {
  const stories = [
    { id: 1, username: "Dharan A", img: "/assets/person/2.jpeg" },
    { id: 2, username: "Jane Smith", img: "/assets/person/3.jpeg" },
    { id: 3, username: "Mike Johnson", img: "/assets/person/4.jpeg" },
    { id: 4, username: "Sarah Williams", img: "/assets/person/5.jpeg" },
    { id: 5, username: "David Brown", img: "/assets/person/6.jpeg" }
  ];

  return (
    <div className="stories">
      <div className="storyCard create">
        <div className="storyProfile">
          <img
            className="storyProfileImg"
            src="/assets/person/1.jpeg"
            alt=""
          />
          <button className="storyAddButton">+</button>
        </div>
        <span className="storyUsername">Create Story</span>
      </div>
      {stories.map((story) => (
        <div key={story.id} className="storyCard">
          <div className="storyProfile">
            <img
              className="storyProfileImg"
              src={story.img}
              alt={story.username}
            />
          </div>
          <span className="storyUsername">{story.username}</span>
        </div>
      ))}
    </div>
  );
}