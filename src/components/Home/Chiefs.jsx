import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import chef1 from "../../images/chef1.png";
import chef2 from "../../images/chef2.png";
import chef3 from "../../images/chef3.png";
import chef4 from "../../images/chef4.png";
import chef5 from "../../images/chef5.png";
import chef6 from "../../images/chef6.png";
import Heading from '../Utility/Heading';
import MealsContext from '../../api/MealsContext';
const Chiefs = () => {
  const { UseHomeData } = useContext(MealsContext);
  const { chiefs } = UseHomeData();
  const imgSource = [chef1, chef2, chef3, chef4, chef5, chef6];

  return (
    <div className='container m-auto xl:px-36 py-3 text-center mb-5 px-4 '>
      <Heading title={chiefs.title} />
      <div className='flex flex-wrap sm:grid sm:grid-cols-2 justify-items-center gap-4'>
        {
          chiefs.allchiefs &&
          chiefs.allchiefs.map((chief, i) => <div key={i} className='flex items-center gap-3 text-start shadow-sm shadow-neutral-400 w-full'>
            <img src={imgSource[i]} alt="" className="rounded-sm w-24 h-28 sm:w-32 md:w-44 lg:w-52 " />
            <div className='text-stone-600'>
              <h2 className='capitalize font-bold text-xl text-stone-700'>{chief.name}</h2>
              <div>Recipes: <span className='font-bold text-stone-700 lg:text-lg'>{chief.recipes}</span></div>
              <div>Cuisine: <span className='font-bold text-stone-700 lg:text-lg'>{chief.cuisine}</span></div>
              <ul className='flex gap-2'>
                {
                  chief.social && chief.social.map((icon, index) => <Link to={""} key={index}>{icon}</Link>)
                }
              </ul>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default Chiefs;
