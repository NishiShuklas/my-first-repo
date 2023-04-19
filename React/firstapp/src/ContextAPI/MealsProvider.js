import React, { useState } from "react";
const MealsContext= React.createContext();
const todaysMeal=["Baked Beans","Baked Sweet Potates","Mix sauces Pasta"]
const MealsProvider=({children})=>{
    const [meals,setmeals]=useState(todaysMeal)
    return(
        <MealsContext.Provider value={{meals}}>
            {children}
        </MealsContext.Provider>
    )
}

export const useMealsListContext=()=>React.useContext(MealsContext);
export default MealsProvider