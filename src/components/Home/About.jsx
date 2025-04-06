import React, { useContext } from 'react';
import image1 from "../../images/abote1.jpg";
import image2 from "../../images/abote2.jpg";
import image3 from "../../images/abote3.jpg";
import image4 from "../../images/abote4.jpg";
import image5 from "../../images/abote5.jpg";
import image6 from "../../images/abote6.jpg";
import image7 from "../../images/abote7.jpg";
import image8 from "../../images/abote8.jpg";
import image9 from "../../images/abote9.jpg";
import Heading from '../Utility/Heading';
import Button from '../Utility/Button';
import MealsContext from '../../api/MealsContext';
const About = () => {
  const imgSource = [image1, image2, image3, image4, image5, image6, image7, image8, image9];
  const { UseHomeData } = useContext(MealsContext);
  const { about } = UseHomeData();

  return (
    <div className='container m-auto xl:px-36 py-3 text-center sm:flex justify-between gap-3 mb-5'>
      <div className="desc sm:text-start px-4">
        <Heading title={about.title} />
        <p className='text-sm text-stone-700 mb-3 sm:text-base sm:mb-5'>{about.desc}</p>
        <Button title={about.btn} />
      </div>
      <div className="images grid grid-cols-3 gap-1 mb-3 w-4/5 mx-auto md:mx-0 sm:min-w-80 md:min-w-max">
        {imgSource && imgSource.map((img, i) => <img key={i} src={img} alt="" className="h-28 w-full sm:h-28 md:w-32 lg:w-40 xl:h-24 xl:w-48" />)}
      </div>
    </div>
  );
};

export default About;
