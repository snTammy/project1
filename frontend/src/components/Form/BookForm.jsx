import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form"

//This component is for the creation of a Book in our db

export const BookForm = ({handleSubmit, book, setBook}) => {
    

  

    const handleClear = () => {
        setBook(  {
            title: '',
            author: '',
            description: '',
            cover: '',
            pages: 0,
            published: ''
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="book-name">Title</label>
                <input id="book-name" 
                       placeholder="ex. Murder Mystery Book Title" 
                       value={book.title}
                       onChange={e =>setBook({...book, title: e.target.value})}
                /> 
            </div>
            <div>
                <label htmlFor="author-name">Author</label>
                <input id="author-name" 
                       placeholder="ex. Jessica Fletcher" 
                       value={book.author}
                       onChange={e =>setBook({...book, author: e.target.value})}
                /> 
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input id="description" 
                       placeholder="ex. Plot synopsis goes here" 
                       value={book.description}
                       onChange={e =>setBook({...book, description: e.target.value})}
                /> 
            </div>
            <div>
                <label htmlFor="numberPages">Pages</label>
                <input id="numberPages" 
                       placeholder="ex. 305" 
                       value={book.pages}
                       onChange={e =>setBook({...book, pages: e.target.value})}
                /> 
            </div>
            <div>
                <label htmlFor="datePublished">Published</label>
                <input id="datePublished" 
                       placeholder="12/15/1984" 
                       value={book.published}
                       onChange={e =>setBook({...book, published: e.target.value})}
                /> 
            </div>
            <div>
                <label htmlFor="imgURL">Image URL</label>
                <input id="imgURL" 
                       placeholder="ex. https://someImg.com/img1.jpg" 
                       value={book.cover}
                       onChange={e =>setBook({...book, cover: e.target.value})}
                /> 
            </div>
            <button type="reset" onClick={handleClear}>Clear</button>
            <button>Submit</button>
        </form>

    );
}