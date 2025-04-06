import React, { useContext, useEffect } from 'react';
import MealCard from '../components/Recipes/MealCard';
import MealDetailsContainer from '../components/MealDetails/MealDetailsContainer';
import { useParams } from 'react-router-dom';
import MealsContext from '../api/MealsContext';

const MealDetails = () => {
  const { id } = useParams();
  const { getData, oneMeal, allMeals_ByCategory } = useContext(MealsContext);

  useEffect(() => { window.scrollTo({ behavior: "smooth", top: "0" }); }, [id]);
  useEffect(() => { getData("meal_ByID", id); }, [id]);

  useEffect(() => {
    if (oneMeal?.meals?.[0]) {
      getData("meals_ByCategory", oneMeal.meals[0].strCategory);
    }
  }, [oneMeal]);

  return (
    <div className='container m-auto px-2 xl:px-36 py-3 '>

      <MealDetailsContainer mealDetails={oneMeal?.meals && oneMeal?.meals?.[0]} />

      <div className='my-3'>
        <h2 className='font-bold text-stone-700 my-1 capitalize md:text-2xl'>More meals :</h2>
        <div className="meals grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 ">
          {allMeals_ByCategory.meals &&
            allMeals_ByCategory.meals.slice(0, 4).map((meal, i) => <MealCard key={i} _id={meal.idMeal} image={meal.strMealThumb} title={meal.strMeal} />)
          }
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
