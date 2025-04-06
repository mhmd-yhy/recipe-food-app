import { useEffect, useState } from "react";
import { getAllCategories, getAllMeals, getMealByID, getMeals_ByCategory, getMeals_BySearch } from "./Api";
import UseHomeData from "../api/HomeData";
const Actions = () => {
  const [allMeals, setAllMeals] = useState({});
  const [oneMeal, setOneMeal] = useState([{ strIngredient1: "" }]);
  const [allMeals_ByCategory, setAllMeals_ByCategory] = useState([]);
  const [allMeals_BySearch, setAllMeals_BySearch] = useState([]);
  const [allCategories, setAllCategories] = useState();

  useEffect(() => { getAllData(); }, []);

  const getAllData = async () => {
    setAllMeals(await getAllMeals());
    setAllCategories(await getAllCategories());
  };

  const getData = async (type, param) => {
    if (type === "meal_ByID") {
      setOneMeal(await getMealByID(param));
      return;
    }
    if (type === "meals_ByCategory") {
      if (param === "Default") {
        setAllMeals_ByCategory([]);
        setAllMeals_BySearch([]);
        getAllData();
        return;
      }
      else {
        setAllMeals_ByCategory(await getMeals_ByCategory(param));
        setAllMeals_BySearch([]);
        setAllMeals([]);
        return;
      }
    }
    if (type === "meals_BySearch") {
      if (param === "") {
        setAllMeals_BySearch([]);
        setAllMeals_ByCategory([]);
        getAllData();
        return;
      } else {
        setAllMeals_BySearch(await getMeals_BySearch(param));
        setAllMeals_ByCategory([]);
        setAllMeals([]);
      }
    }
  };

  return [allMeals, allCategories, getData, getAllData, oneMeal, allMeals_ByCategory, allMeals_BySearch, UseHomeData];
};

export default Actions;
