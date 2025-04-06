export const getAllMeals = async () => {
  const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json())
    .then((json) => json);
  return data;
};
export const getAllCategories = async () => {
  const data = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then((response) => response.json())
    .then((json) => json);
  return data;
};
export const getMealByID = async (mealID) => {
  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then((response) => response.json())
    .then((json) => json);
  return data;
};
export const getMeals_ByCategory = async (category) => {
  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    .then((response) => response.json())
    .then((json) => json);
  return data;
};
export const getMeals_BySearch = async (mealName) => {
  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    .then((response) => response.json())
    .then((json) => json);
  return data;
};
