import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MealsContext from '../../api/MealsContext';

const Footer = () => {
  const { UseHomeData } = useContext(MealsContext);
  const { footer } = UseHomeData();
  const { rights, contact, socials } = footer;

  return (
    <div className='py-3 bg-neutral-900'>
      <div className='container m-auto px-4 xl:px-36 text-stone-200 flex flex-wrap gap-4 sm:flex-nowrap sm:justify-center md:justify-start sm:gap-6'>
        <div className='sm:max-w-96 lg:max-w-full xl:max-w-3xl'>
          <h2 className='font-bold tracking-wide my-2 capitalize sm:text-2xl'>{rights.title}</h2>
          <p className='text-sm sm:text-base lg:text-lg '>{rights.desc}</p>
          <div className="reserved mt-2">{rights.right}</div>
        </div>
        <div>
          <h2 className='font-bold tracking-wide my-2 capitalize sm:text-2xl'>{contact.title}</h2>
          <ul className='text-sm sm:text-base lg:text-lg'>
            {contact.allContact.map((cont, i) => <li key={i}>{cont}</li>)}
          </ul>
        </div>
        <div>
          <h2 className='font-bold tracking-wide my-2 capitalize sm:text-2xl'>{socials.title}</h2>
          <ul className='text-sm sm:text-base lg:text-lg capitalize'>
            {socials.allSocials && socials.allSocials.map((soc, i) => <li key={i}><Link to={soc.url} target='_blank'>{soc.title}</Link></li>)}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;
