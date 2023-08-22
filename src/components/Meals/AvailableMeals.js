import React, { useEffect, useState } from "react";
import classes from "../Styles/AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [meals, setMeals] = useState([])

  const fetchMealsData = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(
        "https://tasks-data-17dc7-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("opps! something went wrong");
      }
      const mealsData = await response.json();

      const loadedData = [];
      for (const key in mealsData) {
        loadedData.push({
          id: key,
          name: mealsData[key].name,
          description: mealsData[key].description,
          price: mealsData[key].price,
        });
      }
     setMeals(loadedData)
    
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false)
  };

  useEffect(() => {
    fetchMealsData();
  }, []);

       const mealList = meals.map((meal) => {
         return (
           <MealItem
             id={meal.id}
             key={meal.id}
             name={meal.name}
             description={meal.description}
             price={meal.price}
           />
         );
       });



  return (
    <section className={classes.meals}>
      <Card><ul>{mealList}</ul></Card>
    </section>
  );
};

export default AvailableMeals;
