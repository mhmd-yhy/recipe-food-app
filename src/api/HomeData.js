import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const about = {
  title: "what are we about",
  desc: "With our app, you can easily filter recipes by dietary preferences, ingredients, or cooking time, ensuring you find the perfect dish for any occasion. Moreover, you can explore tips and tricks from seasoned chefs to enhance your cooking skills.",
  btn: "explone now",
};
const improveSkills = {
  title: "improve your culinary skills",
  skills: ["Learn nwe recipes", "Experiment with food", "Write your own recipes", "Know nutrition facts", "Get cooking tips", "Get ranked",],
  btn: "signup now",
};
const quote = {
  title: "Antoni Bourdain",
  desc: "Cooking is not just about ingredients, recipes, and cooking. It's about harnessing imagination, empowerment, and creativity, Every recipe is a journey of flavors. Explore, create, and let your culinary imagination run wild!"
};
const chiefs = {
  title: "our top chiefs",
  allchiefs: [
    {
      name: "kros ench",
      recipes: "20",
      cuisine: "Maxican",
      social: [
        <FaFacebook className='text-blue-800 text-lg' />,
        <FaTwitter className='text-teal-400 text-lg' />,
        <FaInstagram className='text-red-500 text-lg' />]
    },
    {
      name: "ober frens",
      recipes: "5",
      cuisine: "Maxican",
      social: [
        <FaFacebook className='text-blue-800 text-lg' />,
        <FaTwitter className='text-teal-400 text-lg' />,
        <FaInstagram className='text-red-500 text-lg' />]
    },
    {
      name: "joud braks",
      recipes: "10",
      cuisine: "Maxican",
      social: [
        <FaFacebook className='text-blue-800 text-lg' />,
        <FaTwitter className='text-teal-400 text-lg' />,
        <FaInstagram className='text-red-500 text-lg' />]
    },
    {
      name: "trasf prok",
      recipes: "25",
      cuisine: "Maxican",
      social: [
        <FaFacebook className='text-blue-800 text-lg' />,
        <FaTwitter className='text-teal-400 text-lg' />,
        <FaInstagram className='text-red-500 text-lg' />]
    },
    {
      name: "prense houb",
      recipes: "7",
      cuisine: "Maxican",
      social: [
        <FaFacebook className='text-blue-800 text-lg' />,
        <FaTwitter className='text-teal-400 text-lg' />,
        <FaInstagram className='text-red-500 text-lg' />]
    },
    {
      name: "metre krans",
      recipes: "15",
      cuisine: "Maxican",
      social: [
        <FaFacebook className='text-blue-800 text-lg' />,
        <FaTwitter className='text-teal-400 text-lg' />,
        <FaInstagram className='text-red-500 text-lg' />]
    },
  ]
};
const footer = {
  rights: {
    title: "foodiesDish.com",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, vero, magni eveniet voluptatum, doloribus corporis ullam non fuga necessitatibus.",
    right: "© 2025 | YahyaApp. All rights reserved.",
  },
  contact: {
    title: "Contact Us",
    allContact: ["foodiesDish@gmail.com", "+90 536 675 13 48", "1171 esenyurt istenbul",],
  },
  socials: {
    title: "socials",
    allSocials: [
      {
        title: "facebook",
        url: "https://www.facebook.com"
      },
      {
        title: "twitter",
        url: "https://www.twitter.com"
      },
      {
        title: "instagram",
        url: "https://www.instagram.com"
      }
    ]
  }

};

const UseHomeData = () => {
  return { about, improveSkills, quote, chiefs, footer };
};
export default UseHomeData;