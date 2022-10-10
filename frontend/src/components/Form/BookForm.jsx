import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as ReactBootStrap from 'react-bootstrap';

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
            <div class="container">
            
                <label htmlFor="book-name">Title</label>
                <input class="form-control mb-2" type="text" id="book-name" 
                       placeholder="ex. Murder Mystery Book Title" 
                       value={book.title}
                       onChange={e =>setBook({...book, title: e.target.value})}
                /> 
           
            <div>
                <label htmlFor="author-name">Author</label>
                <input class="form-control mb-2" type="text" id="author-name" 
                       placeholder="ex. Jessica Fletcher" 
                       value={book.author}
                       onChange={e =>setBook({...book, author: e.target.value})}
                /> 
            </div>

            <div class="form-row align-items-center">

            <div class="col-auto">
            <label for="inlineFormInputGroup" htmlFor="datePublished">Published</label>
                <input class="form-control mb-2" type="text" id="inlineFormInput" 
                       placeholder="12/15/1984" 
                       value={book.published}
                       onChange={e =>setBook({...book, published: e.target.value})}
                />   
            </div>
            <div class="col-auto">
                <label for="inlineFormInputGroup" htmlFor="numberPages">Pages</label>
                <input class="form-control mb-2" type="text" id="inlineFormInput" 
                       placeholder="ex. 305" 
                       value={book.pages}
                       onChange={e =>setBook({...book, pages: e.target.value})}
                /> 
               
            </div>
            </div>
            <div>
            <label htmlFor="description">Description</label>
                <input class="form-control mb-2" type="text" id="description" 
                       placeholder="ex. Plot synopsis goes here" 
                       value={book.description}
                       onChange={e =>setBook({...book, description: e.target.value})}
                /> 
               
            </div>
            <div>
                <label htmlFor="imgURL">Image URL</label>
                <input class="form-control mb-3" type="text" id="imgURL" 
                       placeholder="ex. https://someImg.com/img1.jpg" 
                       value={book.cover}
                       onChange={e =>setBook({...book, cover: e.target.value})}
                /> 
            </div>

            <div class="container">
            <div class="row">
            <div class="btn-group mr-2" role="group">
            <button class="btn btn-secondary btn-block" type="reset" onClick={handleClear}>Clear</button>
           
            <button class="btn btn-primary btn-block" >Submit</button>
            </div>
            </div>
            </div>

            </div>
        </form>

    );
}