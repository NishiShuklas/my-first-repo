import { useContext, useState } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/Books";

export default function BookShow({ book }) {

    const [showEdit, setShowEdit] = useState(false)
    const { deleteBookById } = useContext(BooksContext)

    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleDeleteClick = () => {
        console.log(book.id);
        deleteBookById(book.id)
    }
    const handleSubmit = () => {
        setShowEdit(!showEdit)
        
    }
    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book} />
    }
    return (
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
            {content}
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}