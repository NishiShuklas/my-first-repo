import { useState } from "react"
export default function Word(){
const [word,setWord]=useState("Eat")
const handleClick=()=>{
    var action=(word=='Drink')?'Eat':'Drink'
    setWord(action)
}
return(
<div><h1>{word+" at little lemon restaurant"}</h1>
<button onClick={handleClick}>Change the action</button>
</div>)
}