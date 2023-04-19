import { useMealsListContext } from './MealsProvider'

const MealsList = () => {
    const { meals } = useMealsListContext();
    return (
        <div>
            <h2>Meals List using Context API</h2>
            
            {meals.map((meal,index) => (
            <div><h2 key={index}>{meal}</h2></div>))}
        </div>
    )
}

export default MealsList