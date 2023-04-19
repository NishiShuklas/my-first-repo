import { useState } from "react";
import searchImages from "../api"
import SearchBar from "./SearchBar"
import ImageList from './ImageList'
import './searchbar.css'


export default function App() {
    const [images, setImages] = useState([])
    const handleSubmit = async (term) => {
        const result = await searchImages(term);
        setImages(result)
    }
    return (
        <div><SearchBar onSubmit={handleSubmit} />
        <ImageList images={images}/></div>
    )
}