//display and edit of book
import { useParams } from "react-router-dom";
import axios from 'axios'
import {useState, useEffect } from "react";
import { BookForm } from "../components/Form/BookForm";


export const BookDetails = () => {
    let { id } = useParams();

    const [book, setBook] = useState({});

    const handleUpdate = async (event) => {
        event.preventDefault();
        try{
            const res = await axios.put(`http://localhost:9000/books/${id}`,{
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

        } catch (err) {
            console.log(err);
        }

        console.log(book);
    }
    useEffect(() =>  {
        axios.get(`http://localhost:9000/books/${id}`)
        .then(res => { setBook({
            title: res.data.title,
            author: res.data.author,
            description: res.data.description,
            cover: res.data.coverUrl,
            pages: res.data.numPgs,
            published: res.data.releaseDate
        }); console.log(res.data) })
        .catch(err => console.error(err)); // This could easily be to render an error display

    }, []);

    return(
     <BookForm handleSubmit={handleUpdate} book={book} setBook={setBook}></BookForm>
    );
}