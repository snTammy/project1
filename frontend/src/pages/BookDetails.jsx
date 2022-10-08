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
        </form>
    );
}