import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Utility/Button';

const MealDetailsContainer = ({ mealDetails }) => {
  const obj = mealDetails;
  const IngredientArray = ['strIngredient1', 'strIngredient2', 'strIngredient3', 'strIngredient4', 'strIngredient5', 'strIngredient6', 'strIngredient7', 'strIngredient8', 'strIngredient9', 'strIngredient10', 'strIngredient11', 'strIngredient12', 'strIngredient13', 'strIngredient14', 'strIngredient15', 'strIngredient16', 'strIngredient17', 'strIngredient18', 'strIngredient19', 'strIngredient20',];

  const measureArray = ['strMeasure1', 'strMeasure2', 'strMeasure3', 'strMeasure4', 'strMeasure5', 'strMeasure6', 'strMeasure7', 'strMeasure8', 'strMeasure9', 'strMeasure10', 'strMeasure11', 'strMeasure12', 'strMeasure13', 'strMeasure14', 'strMeasure15', 'strMeasure16', 'strMeasure17', 'strMeasure18', 'strMeasure19', 'strMeasure20',];

  const allIngredients = IngredientArray.map(key => obj?.[key]).filter(value => value);
  const allMeasures = measureArray.map(key => obj?.[key]).filter(value => value);

  return (
    <div className='md:grid grid-cols-2 col-span-1 gap-2'>
      <img src={mealDetails?.strMealThumb} alt="" className='mx-auto w-full h-96 col-span-1' />

      <div className='Ingredients col-span-1'>
        <h1 className='flex justify-between my-1 text-lg font-bold text-stone-700 md:text-2xl'>
          <div>{mealDetails?.strMeal}</div>
          <div className='text-base sm:text-lg md:text-2xl'>{mealDetails?.strCategory}</div>
        </h1>
        <h2 className='font-bold text-stone-700 my-1 capitalize md:text-lg'>ingredients :</h2>

        <ul className='grid grid-cols-2 gap-y-2 mb-3'>
          {
            allIngredients.map((ingredient, index) => (
              <li key={index} className='text-xs text-stone-700 sm:mb-2 lg:text-lg'>
                <span className='p-0.5 bg-pink-700 mr-1'></span>
                {ingredient} {allMeasures[index] ? `(${allMeasures[index]})` : ''}
              </li>
            ))
          }


        </ul>
      </div>
      <div className="Prepare col-span-2">
        <h2 className='font-bold text-stone-700 my-1 capitalize md:text-lg'>How to Prepare :</h2>
        <p className='text-sm text-stone-700 mb-3 sm:text-base sm:mb-5'>{mealDetails?.strInstructions}</p>
        <Link to={mealDetails?.strSource} className="link"><Button title={"read more"} /></Link>
      </div>
    </div>
  );
};

export default MealDetailsContainer;