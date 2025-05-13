import { meals } from "../lib/meals";
import MealItem from "./MealItem";

export default function Meals() {
  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
