import { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap';

const Book = ({book: {title, author, description, coverUrl, numPgs, releaseDate,_id}}) => {
    
    
    const handleDelete = async (event) =>{
   
        console.log('I am deleting a book');
        try{
            const res = await axios.delete(`http://localhost:9000/books/${_id}`,{
                title: title,
                author: author,
                description: description,
                coverUrl: coverUrl,
                numPgs: numPgs,
                releaseDate: releaseDate
            });
            
            console.log(res.data);
        {/* Redirect to BookList */}
        
        
    
        } catch (err) {
            console.log(err);
        }
    
        //console.log(book);
    
    }
    return (
        <tr>
            <td><Link to={`/books/${_id}`}>{title}</Link></td>
            <td><img height="100" src={coverUrl} alt={title}></img></td>
            <td><button onClick={handleDelete}>delete</button></td>
            
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