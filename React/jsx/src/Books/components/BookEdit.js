import { useState } from "react"

export default function ({ book,onSubmit }) {
    const [title, setTitle] = useState(book.title)
    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(book.id,title)
    }
    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button is-primary" >Save</button>
        </form>
    )
}