import MealsProvider from './MealsProvider'
import MealsList from './MealsList'
import Counter from './Counter'

export default function AppContext(){
    return (
        <div>
            <MealsProvider>
                <MealsList/>
                <Counter/>
            </MealsProvider>
            
        </div>
    )
}