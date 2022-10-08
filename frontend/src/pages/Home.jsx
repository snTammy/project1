import { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

const Book = ({book: {title, author, description, coverUrl, numPgs, releaseDate,_id}}) => {
    return (
        <tr>
            <td><Link to={`/books/${_id}`}>{title}</Link></td>
            
        </tr>
    );
}
export const Home = () => {
   
    const [bookList, setBookList] = useState([]);

    useEffect(() =>  {
        axios.get('http://localhost:9000/books')
        .then(res => { setBookList(res.data); console.log(res.data) })
        .catch(err => console.error(err)); // This could easily be to render an error display

    }, []);
   
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th> 
                </tr>  
            </thead>
            <tbody>
            {bookList.map(book => <Book key={book._id} book={book}/>)}
             </tbody>

        </table>
    );
}