import { v4 as uuid } from "uuid";
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
    _id: 5,
    firstName: "G",
    lastName: "Rahul",
    username: "Rahul",
    password: "Rahul123",
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
];
