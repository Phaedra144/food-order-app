import React, { useEffect, useState } from "react";
import Card from "../../UI/Card";
import MealsSummary from "../summary/MealsSummary";
import MealItem from "./MealItem";
import styles from "./Meals.module.css";
import useHttp from '../../../hooks/use-http';

function Meals(props) {

  const [meals, setMeals] = useState([]);

  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    const fetchList = [];
    const addMeal = (mealObj) => {
      for (const mealKey in mealObj) {
        fetchList.push({
          id: mealKey,
          name: mealObj[mealKey].name,
          description: mealObj[mealKey].description,
          price: mealObj[mealKey].price
        });
      }
      setMeals(fetchList);
    };

    fetchMeals(
      { url: 'https://react-food-order-69328-default-rtdb.europe-west1.firebasedatab1ase.app/food.json' },
      addMeal
    );
  }, [fetchMeals]);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (isLoading) {
    return (
      <section className={styles.mealsLoading}>
        <p>Loading meals...</p>
      </section>
    );
  }

  return (
    <section>
      <MealsSummary />
      <Card className={styles.meals}>
        <ul>{mealsList}</ul>
      </Card>
      {error && <p className={styles.mealsLoadingError}>{error}</p>}
    </section>
  );
};

export default Meals;
