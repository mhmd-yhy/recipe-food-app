import React from 'react';
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
const About = () => {
  return (
    <div className='container m-auto xl:px-36 py-3 text-center sm:flex justify-between gap-3 mb-5'>
      <div className="desc sm:text-start">
        <Heading title="what are we about" />
        <p className='text-sm text-stone-700 mb-3 sm:text-base sm:mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deserunt quo modi hic corrupti doloremque reprehenderit quaerat, optio inventore nemo fuga eum tenetur corrupti doloremque reprehenderit quaerat, optio inventore nemo fuga eum</p>
        <div className='mb-3 sm:mb-5'>
          <button className='uppercase font-bold p-2  bg-pink-700 text-stone-200 tracking-wider'>explone now</button>
        </div>
      </div>
      <div className="images grid grid-cols-3 gap-1 mb-3 w-4/5 mx-auto md:mx-0 sm:min-w-80 md:min-w-max">
        <img src={image1} alt="" className="h-28 w-full sm:h-28 md:w-32 lg:w-40 xl:h-24 xl:w-48" />
        <img src={image2} alt="" className="h-28 w-full sm:h-28 md:w-32 lg:w-40 xl:h-24 xl:w-48" />
        <img src={image3} alt="" className="h-28 w-full sm:h-28 md:w-32 lg:w-40 xl:h-24 xl:w-48" />
        <img src={image4} alt="" className="h-28 w-full sm:h-28 md:w-32 lg:w-40 xl:h-24 xl:w-48" />
        <img src={image5} alt="" className="h-28 w-full sm:h-28 md:w-32 lg:w-40 xl:h-24 xl:w-48" />
        <img src={image6} alt="" className="h-28 w-full sm:h-28 md:w-32 lg:w-40 xl:h-24 xl:w-48" />
        <img src={image7} alt="" className="h-28 w-full sm:h-28 md:w-32 lg:w-40 xl:h-24 xl:w-48" />
        <img src={image8} alt="" className="h-28 w-full sm:h-28 md:w-32 lg:w-40 xl:h-24 xl:w-48" />
        <img src={image9} alt="" className="h-28 w-full sm:h-28 md:w-32 lg:w-40 xl:h-24 xl:w-48" />
      </div>
    </div>
  );
};

export default About;
