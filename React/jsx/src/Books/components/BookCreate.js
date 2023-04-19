import { useState } from "react"

export default function BookCreate({ onCreate }) {
    const [title, setTiltle] = useState('')

    const handleChange = (event) => {
        
        setTiltle(event.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        onCreate(title);
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