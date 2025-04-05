import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='py-3 bg-neutral-900'>
      <div className='container m-auto px-4 xl:px-36 text-stone-200 flex flex-wrap gap-4 sm:flex-nowrap sm:justify-center md:justify-start sm:gap-6'>
        <div className='sm:max-w-96 lg:max-w-full xl:max-w-3xl'>
          <h2 className='font-bold tracking-wide my-2 capitalize sm:text-2xl'>foodiesDish.com</h2>
          <p className='text-sm sm:text-base lg:text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, vero, magni eveniet voluptatum, doloribus corporis ullam non fuga necessitatibus.</p>
          <div className="reserved mt-2">© 2021 | non fuga necessitatibus</div>
        </div>
        <div>
          <h2 className='font-bold tracking-wide my-2 capitalize sm:text-2xl'>Contact Us</h2>
          <ul className='text-sm sm:text-base lg:text-lg'>
            <li className='email'>foodiesDish@gmail.com</li>
            <li className='phone'>+90 536 675 13 48</li>
            <li className='adress capitalize'>1171 esenyurt istenbul</li>
          </ul>
        </div>
        <div>
          <h2 className='font-bold tracking-wide my-2 capitalize sm:text-2xl'>socials</h2>
          <ul className='text-sm sm:text-base lg:text-lg capitalize'>
            <li><Link to="https://www.facebook.com">facebook</Link></li>
            <li><Link to="https://www.twitter.com">twitter</Link></li>
            <li><Link to="https://www.instagram.com">instagram</Link></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;
