import React from "react";
import classes from "../Styles/AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Benachin",
    description: "Finest fish, rice and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Domoda",
    description: "A mandinka specialty",
    price: 40.0,
  },
  {
    id: "m3",
    name: "Yassa",
    description: "Tender chicken with great taste",
    price: 20.5,
  },
  {
    id: "m4",
    name: "Fofu",
    description: "Nigeria's finest meal",
    price: 22.99,
  },
];
const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => {
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
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
