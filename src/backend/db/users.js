import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
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
    followers: [
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
    ],
    following: [
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
    ],
    bookmarks: [],
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
    followers: [
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
    ],
    following: [
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
    ],
    bookmarks: [],
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
    followers: [
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
    ],
    following: [
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
    ],
    bookmarks: [],
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
    followers: [
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
    ],
    following: [
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
    ],
    bookmarks: [],
  },
  {
    _id: 5,
    firstName: "G",
    lastName: "Rahul",
    username: "Rahul",
    password: "Rahul123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    bio: "I might not be where I want to be yet, but I get closer everyday",
    image:
      "https://res.cloudinary.com/dxj7py6nj/image/upload/v1656604691/ingram/img-10_egt8m8.jpg",
    website: "www.rahul_g.in",
    followers: [],
    following: [
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
    ],
    bookmarks: [],
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
    followers: [
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
    ],
    following: [
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
    ],
    bookmarks: [],
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
    followers: [
      {
        _id: 2,
        firstName: "K",
        lastName: "Indrajit",
        username: "Indrajit",
        password: "Indrajit123",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    following: [
      {
        _id: 2,
        firstName: "K",
        lastName: "Indrajit",
        username: "Indrajit",
        password: "Indrajit123",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    bookmarks: [],
  },
];
