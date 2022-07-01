import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: 1,
    content: {
      postText:
        "Nothing is impossible. Some things are just less likely than others.",
      postImage: "",
    },
    likes: {
      likeCount: 6,
      likedBy: [
        {
          _id: 1,
          firstName: "G",
          lastName: "Rohit",
          username: "Rohit",
          password: "rohitrohit",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
        {
          _id: 2,
          firstName: "K",
          lastName: "Indrajit",
          username: "Indrajit",
          password: "Indrajit123",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
        {
          _id: 3,
          firstName: "P",
          lastName: "Darshana",
          username: "Darshana",
          password: "Darshana123",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
        {
          _id: 4,
          firstName: "G",
          lastName: "Kiran",
          username: "Kiran",
          password: "Kiran123",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
        {
          _id: 6,
          firstName: "G",
          lastName: "Akshay",
          username: "Akshay",
          password: "Akshay123",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
        {
          _id: 7,
          firstName: "G",
          lastName: "Arjun",
          username: "Arjun",
          password: "Arjun123",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    username: "Indrajit",
    createdAt: new Date(2021, 8, 10),
    updatedAt: new Date(2021, 8, 10),
    comments: [
      {
        _id: uuid(),
        username: "Kiran",
        text: "Interesting",
        createdAt: new Date(2021, 9, 20),
        updatedAt: new Date(2021, 9, 20),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "Rahul",
        text: "Wow!",
        createdAt: new Date(2022, 4, 30),
        updatedAt: new Date(2022, 4, 30),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: 2,
    content: {
      postText: "View 😍",
      postImage:
        "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656239530/ingram/img-1_caz5a4.jpg",
    },
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: 2,
          firstName: "K",
          lastName: "Indrajit",
          username: "Indrajit",
          password: "Indrajit123",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
        {
          _id: 3,
          firstName: "P",
          lastName: "Darshana",
          username: "Darshana",
          password: "Darshana123",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
        {
          _id: 4,
          firstName: "G",
          lastName: "Kiran",
          username: "Kiran",
          password: "Kiran123",
          createdAt: formatDate(),
          updatedAt: formatDate(),
        },
      ],
      dislikedBy: [],
    },
    username: "Akshay",
    createdAt: new Date(2020, 5, 24),
    updatedAt: new Date(2020, 5, 24),
    comments: [
      {
        _id: uuid(),
        username: "Darshana",
        text: "Wow!",
        createdAt: new Date(2020, 5, 25),
        updatedAt: new Date(2020, 5, 25),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: 3,
    content: {
      postText:
        "It is easier to live through someone else than to become complete yourself.",
      postImage: "",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Kiran",

    comments: [],
    createdAt: new Date(2021, 3, 20),
    updatedAt: new Date(2021, 3, 20),
  },
  {
    _id: 4,
    content: {
      postText: "How's it ?",
      postImage:
        "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656239813/ingram/img-3_ldzlmi.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Darshana",
    createdAt: new Date(2022, 4, 5),
    updatedAt: new Date(2022, 4, 5),
    comments: [
      {
        _id: uuid(),
        username: "Kiran",
        text: "10/10 !",
        createdAt: new Date(2022, 5, 20),
        updatedAt: new Date(2022, 5, 20),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: 5,
    content: {
      postText: "Much needed break 😍!",
      postImage:
        "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656239818/ingram/img-4_dlg7ll.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Darshana",
    createdAt: new Date(2022, 4, 10),
    updatedAt: new Date(2022, 4, 10),
    comments: [],
  },
  {
    _id: 6,
    content: {
      postText: "Mornings like these 😄",
      postImage:
        "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656239822/ingram/img-5_jjhn9z.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Kiran",
    createdAt: new Date(2020, 5, 20),
    updatedAt: new Date(2020, 5, 20),
    comments: [
      {
        _id: uuid(),
        username: "Akshay",
        text: "Wowww",
        createdAt: new Date(2022, 5, 21),
        updatedAt: new Date(2022, 5, 21),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: 7,
    content: {
      postText: "Cheat Day !",
      postImage:
        "https://res.cloudinary.com/dxj7py6nj/image/upload/v1655889200/ingram/cld-sample-4.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Arjun",
    createdAt: new Date(2021, 5, 20),
    updatedAt: new Date(2021, 5, 20),
    comments: [
      {
        _id: uuid(),
        username: "Akshay",
        text: "🤤",
        createdAt: new Date(2022, 5, 21),
        updatedAt: new Date(2022, 5, 21),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: 8,
    content: {
      postText: "I don’t need therapy, I just need my Video Game",
      postImage:
        "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656239811/ingram/img-2_gwy5qf.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Arjun",
    createdAt: new Date(2021, 5, 15),
    updatedAt: new Date(2021, 5, 15),
    comments: [
      {
        _id: uuid(),
        username: "Akshay",
        text: "😲😲",
        createdAt: new Date(2021, 5, 17),
        updatedAt: new Date(2021, 5, 17),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: 9,
    content: {
      postText: "Random chance plays a huge part in everybody's life.",
      postImage: "",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Akshay",
    createdAt: new Date(2020, 5, 15),
    updatedAt: new Date(2020, 5, 15),
    comments: [],
  },
  {
    _id: 10,
    content: {
      postText:
        "What looks like talent is often careful preparation.What looks like skill is often persistent revision.",
      postImage: "",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Akshay",
    createdAt: new Date(2021, 5, 15),
    updatedAt: new Date(2021, 5, 15),
    comments: [
      {
        _id: uuid(),
        username: "Indrajit",
        text: "true",
        createdAt: new Date(2021, 5, 17),
        updatedAt: new Date(2021, 5, 17),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: 11,
    content: {
      postText: "Revisited 😅",
      postImage:
        "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656239530/ingram/img-1_caz5a4.jpg",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Akshay",
    createdAt: new Date(2021, 5, 24),
    updatedAt: new Date(2021, 5, 24),
    comments: [
      {
        _id: uuid(),
        username: "Darshana",
        text: "Nice 😂",
        createdAt: new Date(2021, 5, 25),
        updatedAt: new Date(2021, 5, 25),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: 12,
    content: {
      postText: "Focus on your goals. Not on your obstacles.",
      postImage: "",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Akshay",
    createdAt: new Date(2021, 5, 24),
    updatedAt: new Date(2021, 5, 24),
    comments: [],
  },
  {
    _id: 13,
    content: {
      postText: "Food is our common ground, a universal experience",
      postImage: "",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Akshay",
    createdAt: new Date(2020, 10, 24),
    updatedAt: new Date(2020, 10, 24),
    comments: [],
  },
  {
    _id: 14,
    content: {
      postText:
        "Dear friends, your Christmas gift this year… is me. That’s right, another year of friendship. Your membership has been renewed.",
      postImage: "",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Indrajit",
    createdAt: new Date(2021, 10, 24),
    updatedAt: new Date(2021, 10, 24),
    comments: [],
  },
  {
    _id: 15,
    content: {
      postText: "Anything is good if it's made of chocolate.",
      postImage: "",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Darshana",
    createdAt: new Date(2021, 8, 24),
    updatedAt: new Date(2021, 8, 24),
    comments: [],
  },
  {
    _id: 16,
    content: {
      postText: "Reading without reflecting is like eating without digesting.",
      postImage: "",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Kiran",
    createdAt: new Date(2020, 8, 24),
    updatedAt: new Date(2020, 8, 24),
    comments: [],
  },
  {
    _id: 17,
    content: {
      postText: "Dare to think unthinkable thoughts",
      postImage: "",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Kiran",
    createdAt: new Date(2020, 8, 24),
    updatedAt: new Date(2020, 8, 24),
    comments: [],
  },
  {
    _id: 18,
    content: {
      postText:
        "There's nothing in the world like the feeling you get when you perform a random act of kindness.",
      postImage: "",
    },
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Indrajit",
    createdAt: new Date(2021, 10, 24),
    updatedAt: new Date(2021, 10, 24),
    comments: [],
  },
];
