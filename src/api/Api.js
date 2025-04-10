
import { createContext, useEffect, useState } from "react";
import UseHomeData from "../api/HomeData";

const initailValue = [{}];
export const MealsContext = createContext(initailValue);

const Api = () => {
  const [allMeals, setAllMeals] = useState([]);
  const [allMeals_ByCategory, setAllMeals_ByCategory] = useState([]);
  const [allMeals_BySearch, setAllMeals_BySearch] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    const run = async () => {
      setAllMeals(await getData("search.php?s="));
      setAllCategories(await getData("categories.php"));
    };
    run();
  }, []);

  const getData = async (url) => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/${url}`)
      .then((response) => response.json())
      .then((json) => json);
    return data;
  };

  const getMeals_ByCategory = async (url) => {
    if (url === "filter.php?c=Default") {
      setAllMeals(await getData("search.php?s="));
      setAllMeals_ByCategory([]);
    } else {
      setAllMeals_ByCategory(await getData(url));
      setAllMeals([]);
    }
  };
  const getMeals_BySearchInput = async (url) => {
    if (url === "search.php?s=") {
      setAllMeals_BySearch([]);
      setAllMeals_ByCategory([]);
      setAllMeals(await getData("search.php?s="));
    } else {
      setAllMeals_BySearch(await getData(url));
      setAllMeals_ByCategory([]);
      setAllMeals([]);
    }
  };
  return [allMeals, allCategories, allMeals_ByCategory, allMeals_BySearch, getData, UseHomeData, getMeals_ByCategory, getMeals_BySearchInput];
};

export default Api;
