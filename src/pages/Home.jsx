import React, { useEffect } from 'react';
import About from "../components/Home/About";
import Chiefs from "../components/Home/Chiefs";
import ImproveSkills from "../components/Home/ImproveSkills";
import Quote from "../components/Home/Quote";
const Home = () => {
  useEffect(() => {window.scrollTo({ behavior: "smooth", top: "0" });}, []);
  return (
    <div>
      <About />
      <ImproveSkills />
      <Quote />
      <Chiefs />
    </div>
  );
};

export default Home;
