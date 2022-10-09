//display and edit of book
import { useParams } from "react-router-dom";
import axios from 'axios'
import {useState, useEffect } from "react";


export const BookDetails = () => {
    let { id } = useParams();

    const [book, setBook] = useState({});

    useEffect(() =>  {
        axios.get(`http://localhost:9000/books/${id}`)
        .then(res => { setBook(res.data); console.log(res.data) })
        .catch(err => console.error(err)); // This could easily be to render an error display

    }, []);

    return(
        <form>
            <label>Title</label>
            <input type='text' value={book.title}></input>
            <label>Author</label>
            <input type='text' value={book.author}></input>
            <label>Description</label>
            <input type='text' value={book.description}></input>
            <label>Published</label>
            <input type='text' value={book.releaseDate}></input>
            <label>Cover</label>
            <input type='text' value={book.coverUrl}></input>
            <label>Pages</label>
            <input type='text' value={book.numPgs}></input>
        </form>
    );
}