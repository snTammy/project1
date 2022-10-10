//display and edit of book
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import {useState } from "react";
import { BookForm } from "../components/Form/BookForm";


export const BookNew = () => {
   
    const navigate = useNavigate();
    const [book, setBook] = useState({});
    {/* axios.post*/}
   
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const res = await axios.post('http://localhost:9000/books',{
                title: book.title,
                author: book.author,
                description: book.description,
                coverUrl: book.cover,
                numPgs: book.pages,
                releaseDate: book.published
            });
            console.log("NEW BOOK");
            console.log(res.data);
        {/* Redirect to BookList */}
        navigate('/');
        } catch (err) {
            console.log(err);
        }

        console.log(book);
    }


    return (
       <BookForm handleSubmit={handleSubmit} book={book} setBook={setBook}></BookForm>

    );
}