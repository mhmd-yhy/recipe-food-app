import React, { useContext, useEffect, useState } from 'react';
import MealCard from '../components/Recipes/MealCard';
import MealDetailsContainer from '../components/MealDetails/MealDetailsContainer';
import { useParams } from 'react-router-dom';
import { MealsContext } from '../api/Api';

const MealDetails = () => {
  const { id } = useParams();
  const { getData } = useContext(MealsContext);
  const [oneMeal, setOneMeal] = useState([{ strIngredient1: "" }]);
  const [allMeals_ByCategory, setAllMeals_ByCategory] = useState([]);

  useEffect(() => { window.scrollTo({ behavior: "smooth", top: "0" }); }, [id]);
  useEffect(() => {
    const run = async () => {
      setAllMeals_ByCategory(await getData(`filter.php?c=${oneMeal?.meals?.[0].strCategory}`));
    };
    run();
  }, [oneMeal, id, getData]);

  useEffect(() => {
    const run = async () => { setOneMeal(await getData(`lookup.php?i=${id}`)); };
    run();
  }, [id, getData]);

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
