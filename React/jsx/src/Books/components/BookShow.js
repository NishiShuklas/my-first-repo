import { useState } from "react";
import BookEdit from "./BookEdit";

export default function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false)
    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleDeleteClick = () => {
        console.log(book.id);
        onDelete(book.id)
    }
    const handleSubmit = (id, newTitle) => {
        setShowEdit(!showEdit)
        onEdit(id, newTitle)
    }
    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book} />
    }
    return (
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books"/>
            {content}
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}