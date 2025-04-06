import { createContext } from "react";
const initailValue = [{
  idMeal: "",
  strCategory: "",
  strIngredient1: "",
  strInstructions: "",
  strMeal: "",
  strMealThumb: "",
  strMeasure1: "",
  strSource: "",
}];
const MealsContext = createContext(initailValue);
export default MealsContext;