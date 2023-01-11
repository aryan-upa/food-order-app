import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = props => {
    return (
        <section>
            <MealsSummary/>
            <AvailableMeals/>
        </section>
    );
}

export default Meals;