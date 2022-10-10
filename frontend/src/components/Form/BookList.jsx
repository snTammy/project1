import { useState, useEffect } from "react";
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap';

const Book = ({book: {title, author, description, coverUrl, numPgs, releaseDate,_id}}) => {
    return (
        <tr>
            <td><Link to={`/books/${_id}`}>{title}</Link></td>
            <td><img height="100" src={coverUrl} alt={title}></img></td>
            <td><button onClick={handleDelete}>delete</button></td>
            
        </tr>
    );
}

const handleDelete = async (event, book) =>{
   
    console.log('I am deleting a book');
    try{
        const res = await axios.delete(`http://localhost:9000/books/${book._id}`);
        
        console.log(res.data);
    {/* Redirect to BookList */}
    

    } catch (err) {
        console.log(err);
    }

    console.log(book);

}
export const BookList = () => {
   
    const [bookList, setBookList] = useState([]);

    useEffect(() =>  {
        axios.get('http://localhost:9000/books')
        .then(res => { setBookList(res.data); console.log(res.data) })
        .catch(err => console.error(err)); // This could easily be to render an error display

    }, []);
   
    

    return (
        <ReactBootStrap.Table striped border hover>
            <thead>
                <tr className="row-item">
                    <th>Title</th> 
                    <th>Cover</th>
                    
                    
                </tr>  
            </thead>
            <tbody>
               
            {bookList.map(book => <Book key={book._id} book={book}/>) }
            
             </tbody>

        </ReactBootStrap.Table>
    );
}