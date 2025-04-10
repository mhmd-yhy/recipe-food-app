import React, { useContext } from 'react';
import image4 from "../../images/abote4.jpg";
import Heading from '../Utility/Heading';
import Button from '../Utility/Button';
import { MealsContext } from '../../api/Api';

const ImproveSkills = () => {
  const { UseHomeData } = useContext(MealsContext);
  const { improveSkills } = UseHomeData();
  return (
    <div className='container m-auto xl:px-36 py-3 text-center sm:flex justify-between gap-3 sm:text-start mb-5'>
      <div className="image mb-3 sm:w-1/2"><img src={image4} alt="" className='h-72 w-full sm:h-96' /></div>
      <div className="desc px-4 sm:w-1/2">
        <Heading title={improveSkills.title} />
        <ul className='grid grid-cols-2 gap-2 mb-3 text-start sm:block'>
          {improveSkills.skills &&
            improveSkills.skills.map((skill, i) => <li key={i} className='text-stone-700 sm:mb-2 lg:text-lg'>
              <span className='p-0.5 bg-pink-700 mr-1'></span>
              {skill}</li>)}
        </ul>
        <div className="text-start"><Button title={improveSkills.btn} /></div>
      </div>
    </div>
  );
};

export default ImproveSkills;