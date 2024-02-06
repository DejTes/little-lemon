import { FaFacebook, FaTwitter } from "react-icons/fa";
import img1 from "./images/salad.jpg";
import img2 from "./images/bruschetta.jpg";
import img3 from "./images/pasta.jpg";
import img4 from "./images/gourmet.jpg";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/about",
    text: "about",
  },
  {
    id: 3,
    url: "/menu",
    text: "Menu",
  },
  {
    id: 4,
    url: "/reservation",
    text: "Reservation",
  },
  {
    id: 5,
    url: "/orderonline",
    text: "Order Online",
  },
  {
    id: 6,
    url: "/login",
    text: "Login",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
];

const menuItems = [
  {
    id: 1,
    title: "Greek Salad",
    price: 15.99,
    img: img1,
    desc: `The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.`,
  },
  {
    id: 2,
    title: "Bruschetta",
    price: 13.99,
    img: img2,
    desc: `Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.`,
  },
  {
    id: 3,
    title: "pasta",
    price: 6.99,
    img: img3,
    desc: `Our pasta is made from the finest ingredients, and is perfect for a romantic dinner or a family gathering.`,
  },
  {
    id: 4,
    title: "Gourmet",
    price: 12.99,
    img: img4,
    desc: `Our Gourmet dish is made from the finest ingredients, and is perfect for a romantic dinner or a family gathering.`,
  },
];
export default menuItems;
