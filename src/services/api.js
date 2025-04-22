const mockPosts = [
  {
    id: 1,
    username: "Dharan A",
    profilePicture: "/assets/person/1.jpeg",
    desc: "Enjoying a beautiful day!",
    img: "/assets/post/1.jpeg",
    date: "5 mins ago",
    likes: 32,
    comments: 5
  },
  {
    id: 2,
    username: "jane_smith",
    profilePicture: "/assets/person/2.jpeg",
    desc: "Just finished my project!",
    img: "/assets/post/2.jpeg",
    date: "1 hour ago",
    likes: 45,
    comments: 8
  }
];

export const postAPI = {
  getPosts: async () => ({ data: mockPosts })
};