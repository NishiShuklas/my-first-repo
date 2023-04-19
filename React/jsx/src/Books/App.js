import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from 'axios'

export default function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    }

    useEffect(() => {
        fetchBooks()
    }, []
    )
    const deleteBookById = async (id) => {
       await axios.delete(`http://localhost:3001/books/${id}`)

        const updatedBooks = books.filter((book) => {
            if (book.id != id) {
                return book;
            }

        })
        setBooks(updatedBooks)
    }
    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {

            title
        })

        const updatedBooks = [
            ...books, response.data
        ]
        setBooks(updatedBooks)
        // const updatedBooks = [
        //     ...books,
        //     { id: Math.round(Math.random() * 9999), title }
        // ]
        // setBooks(updatedBooks)

    }

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        })

        // const updatedBooks = books.map((book) => {
        //     if (book.id == id) {
        //         return { ...book, title: newTitle }
        //     }
        //     return book;
        // })

        const updatedBooks = books.map((book) => {
            if (book.id == id) {
                return { ...book, ...response.data }
            }
            return book;
        })
        console.log(response);
        setBooks(updatedBooks)
    }
    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
            <BookCreate onCreate={createBook} />
        </div>
    )
}