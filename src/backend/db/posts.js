import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: 1,
    userId: 2,
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
          bio: "Welcome to my world",
          image:
            "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604362/ingram/profile-pic_2_pfmon9.png",
          website: "www.rohit.com",
        },
        {
          _id: 2,
          firstName: "K",
          lastName: "Indrajit",
          username: "Indrajit",
          password: "Indrajit123",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bio: "It won’t always be easy, but always try to do what’s right",
          image:
            "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604693/ingram/img-11_ay6wgm.jpg",
          website: "www.indrajit.in",
        },
        {
          _id: 3,
          firstName: "P",
          lastName: "Darshana",
          username: "Darshana",
          password: "Darshana123",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bio: "Currently saying yes to new adventures",
          image:
            "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604389/ingram/img-8_lhkw0a.jpg",
          website: "www.darshana.co",
        },
        {
          _id: 4,
          firstName: "G",
          lastName: "Kiran",
          username: "Kiran",
          password: "Kiran123",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bio: "It took me 25 years to look like this",
          image:
            "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604409/ingram/img-6_xacqon.jpg",
          website: "www.kiran.in",
        },
        {
          _id: 6,
          firstName: "G",
          lastName: "Akshay",
          username: "Akshay",
          password: "Akshay123",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bio: "I’m out here hustlin’ to claim what’s mine",
          image:
            "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604688/ingram/img-9_py7ynp.jpg",
          website: "www.akshay.com",
        },
        {
          _id: 7,
          firstName: "G",
          lastName: "Arjun",
          username: "Arjun",
          password: "Arjun123",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bio: "Wanna know my story? Press that follow button.",
          image:
            "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604405/ingram/img-7_d4ohp2.jpg",
          website: "www.arjun.co",
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
        userId: 4,
        username: "Kiran",
        text: "Interesting",
        createdAt: new Date(2021, 9, 20),
        updatedAt: new Date(2021, 9, 20),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        bio: "It took me 25 years to look like this",
        image:
          "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604409/ingram/img-6_xacqon.jpg",
        website: "www.kiran.in",
      },
      {
        _id: uuid(),
        userId: 5,
        username: "Rahul",
        text: "Wow!",
        createdAt: new Date(2022, 4, 30),
        updatedAt: new Date(2022, 4, 30),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        bio: "I might not be where I want to be yet, but I get closer everyday",
        image:
          "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604691/ingram/img-10_egt8m8.jpg",
        website: "www.rahul_g.in",
      },
    ],
    bio: "It won’t always be easy, but always try to do what’s right",
    image:
      "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604693/ingram/img-11_ay6wgm.jpg",
    website: "www.indrajit.in",
  },
  {
    _id: 2,
    userId: 6,
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
          bio: "It won’t always be easy, but always try to do what’s right",
          image:
            "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604693/ingram/img-11_ay6wgm.jpg",
          website: "www.indrajit.in",
        },
        {
          _id: 3,
          firstName: "P",
          lastName: "Darshana",
          username: "Darshana",
          password: "Darshana123",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bio: "Currently saying yes to new adventures",
          image:
            "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604389/ingram/img-8_lhkw0a.jpg",
          website: "www.darshana.co",
        },
        {
          _id: 4,
          firstName: "G",
          lastName: "Kiran",
          username: "Kiran",
          password: "Kiran123",
          createdAt: formatDate(),
          updatedAt: formatDate(),
          bio: "It took me 25 years to look like this",
          image:
            "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604409/ingram/img-6_xacqon.jpg",
          website: "www.kiran.in",
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
        userId: 3,
        username: "Darshana",
        text: "Wow!",
        createdAt: new Date(2020, 5, 25),
        updatedAt: new Date(2020, 5, 25),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        bio: "Currently saying yes to new adventures",
        image:
          "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604389/ingram/img-8_lhkw0a.jpg",
        website: "www.darshana.co",
      },
    ],
    bio: "I’m out here hustlin’ to claim what’s mine",
    image:
      "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604688/ingram/img-9_py7ynp.jpg",
    website: "www.akshay.com",
  },
  {
    _id: 3,
    userId: 4,
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
    bio: "It took me 25 years to look like this",
    image:
      "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604409/ingram/img-6_xacqon.jpg",
    website: "www.kiran.in",
  },
  {
    _id: 4,
    userId: 3,
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
        userId: 4,
        username: "Kiran",
        text: "10/10 !",
        createdAt: new Date(2022, 5, 20),
        updatedAt: new Date(2022, 5, 20),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        bio: "It took me 25 years to look like this",
        image:
          "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604409/ingram/img-6_xacqon.jpg",
        website: "www.kiran.in",
      },
    ],
    bio: "Currently saying yes to new adventures",
    image:
      "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604389/ingram/img-8_lhkw0a.jpg",
    website: "www.darshana.co",
  },
  {
    _id: 5,
    userId: 3,
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
    bio: "Currently saying yes to new adventures",
    image:
      "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604389/ingram/img-8_lhkw0a.jpg",
    website: "www.darshana.co",
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
        userId: 6,
        username: "Akshay",
        text: "Wowww",
        createdAt: new Date(2022, 5, 21),
        updatedAt: new Date(2022, 5, 21),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        bio: "I’m out here hustlin’ to claim what’s mine",
        image:
          "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604688/ingram/img-9_py7ynp.jpg",
        website: "www.akshay.com",
      },
    ],
    bio: "It took me 25 years to look like this",
    image:
      "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604409/ingram/img-6_xacqon.jpg",
    website: "www.kiran.in",
  },
  {
    _id: 7,
    userId: 7,
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
        userId: 6,
        username: "Akshay",
        text: "🤤",
        createdAt: new Date(2022, 5, 21),
        updatedAt: new Date(2022, 5, 21),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        bio: "I’m out here hustlin’ to claim what’s mine",
        image:
          "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604688/ingram/img-9_py7ynp.jpg",
        website: "www.akshay.com",
      },
    ],
    bio: "Wanna know my story? Press that follow button.",
    image:
      "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604405/ingram/img-7_d4ohp2.jpg",
    website: "www.arjun.co",
  },
  {
    _id: 8,
    userId: 7,
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
        userId: 6,
        username: "Akshay",
        text: "😲😲",
        createdAt: new Date(2021, 5, 17),
        updatedAt: new Date(2021, 5, 17),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        bio: "I’m out here hustlin’ to claim what’s mine",
        image:
          "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604688/ingram/img-9_py7ynp.jpg",
        website: "www.akshay.com",
      },
    ],
    bio: "Wanna know my story? Press that follow button.",
    image:
      "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604405/ingram/img-7_d4ohp2.jpg",
    website: "www.arjun.co",
  },
  {
    _id: 9,
    userId: 6,
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
    bio: "I’m out here hustlin’ to claim what’s mine",
    image:
      "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604688/ingram/img-9_py7ynp.jpg",
    website: "www.akshay.com",
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
        userId: 2,
        username: "Indrajit",
        text: "true",
        createdAt: new Date(2021, 5, 17),
        updatedAt: new Date(2021, 5, 17),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        bio: "It won’t always be easy, but always try to do what’s right",
        image:
          "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604693/ingram/img-11_ay6wgm.jpg",
        website: "www.indrajit.in",
      },
    ],
    bio: "I’m out here hustlin’ to claim what’s mine",
    image:
      "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604688/ingram/img-9_py7ynp.jpg",
    website: "www.akshay.com",
  },
  {
    _id: 11,
    userId: 6,
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
        userId: 3,
        username: "Darshana",
        text: "Nice 😂",
        createdAt: new Date(2021, 5, 25),
        updatedAt: new Date(2021, 5, 25),
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        bio: "Currently saying yes to new adventures",
        image:
          "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604389/ingram/img-8_lhkw0a.jpg",
        website: "www.darshana.co",
      },
    ],
    bio: "I’m out here hustlin’ to claim what’s mine",
    image:
      "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604688/ingram/img-9_py7ynp.jpg",
    website: "www.akshay.com",
  },
  {
    _id: 12,
    userId: 6,
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
    bio: "I’m out here hustlin’ to claim what’s mine",
    image:
      "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604688/ingram/img-9_py7ynp.jpg",
    website: "www.akshay.com",
  },
  {
    _id: 13,
    userId: 6,
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
    bio: "I’m out here hustlin’ to claim what’s mine",
    image:
      "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604688/ingram/img-9_py7ynp.jpg",
    website: "www.akshay.com",
  },
  {
    _id: 14,
    userId: 2,
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
    bio: "It won’t always be easy, but always try to do what’s right",
    image:
      "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604693/ingram/img-11_ay6wgm.jpg",
    website: "www.indrajit.in",
  },
  {
    _id: 15,
    userId: 3,
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
    bio: "Currently saying yes to new adventures",
    image:
      "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604389/ingram/img-8_lhkw0a.jpg",
    website: "www.darshana.co",
  },
  {
    _id: 16,
    userId: 4,
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
    bio: "It took me 25 years to look like this",
    image:
      "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604409/ingram/img-6_xacqon.jpg",
    website: "www.kiran.in",
  },
  {
    _id: 17,
    userId: 4,
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
    bio: "It took me 25 years to look like this",
    image:
      "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604409/ingram/img-6_xacqon.jpg",
    website: "www.kiran.in",
  },
  {
    _id: 18,
    userId: 2,
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
    bio: "It won’t always be easy, but always try to do what’s right",
    image:
      "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604693/ingram/img-11_ay6wgm.jpg",
    website: "www.indrajit.in",
  },
];
