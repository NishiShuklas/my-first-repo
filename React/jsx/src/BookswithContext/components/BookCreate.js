import { useContext, useState } from "react";
import BooksContext from "../context/Books";

export default function BookCreate() {
    const [title, setTiltle] = useState('')
    const {createBook}=useContext(BooksContext)

    const handleChange = (event) => {
        
        setTiltle(event.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        createBook(title);
        setTiltle('')
    }
    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input"value={title} onChange={handleChange} />
                <button className="button">Create!</button>
            </form>
        </div>
    )
}