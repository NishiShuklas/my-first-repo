import React, { useState } from 'react';
import AnimalShow from './AnimalShow';
import './App.css'

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']
    return animals[Math.floor(Math.random() * animals.length)]
}

export default function App1() {
    const [animals, setAnimals] = useState([])
    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    }

    const renderedAnimals = animals.map((animal, key) => {
        return <AnimalShow type={animal} />
    })

    return (
        <div className='app'>
            <button onClick={handleClick}>Add Animal</button>
            <div className='animal-list'>{renderedAnimals}</div>

        </div>
    )
}