import { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

const Book = ({book: {title, author, description, coverUrl, numPgs, releaseDate,_id}}) => {
    return (
        <tr>
            <td><Link to={`/books/${_id}`}>{title}</Link></td>
            <td><img height="100" src={coverUrl} alt={title}></img></td>
            
        </tr>
    );
}
export const BookList = () => {
   
    const [bookList, setBookList] = useState([]);

    useEffect(() =>  {
        axios.get('http://localhost:9000/books')
        .then(res => { setBookList(res.data); console.log(res.data) })
        .catch(err => console.error(err)); // This could easily be to render an error display

    }, []);
   
    return (
        <table>
            <thead>
                <tr className="row-item">
                    <th>Title</th> 
                    <th>Cover</th>
                    <th></th>
                </tr>  
            </thead>
            <tbody>
            {bookList.map(book => <Book key={book._id} book={book}/>)}
             </tbody>

        </table>
    );
}