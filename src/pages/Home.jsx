import React, { useEffect } from 'react';
import About from "../components/Home/About";
import Chiefs from "../components/Home/Chiefs";
import ImproveSkills from "../components/Home/ImproveSkills";
import Quote from "../components/Home/Quote";
import TastiestFood from '../components/Home/TastiestFood';
import CategoriesContainer from '../components/Home/CategoriesContainer';
const Home = () => {
  useEffect(() => { window.scrollTo({ behavior: "smooth", top: "0" }); }, []);

  return (
    <div>
      <About />
      <TastiestFood />
      <ImproveSkills />
      <Quote />
      <CategoriesContainer />
      <Chiefs />
    </div>
  );
};

export default Home;
