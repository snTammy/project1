import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form"

//This component is for the creation of a Book in our db

export const BookForm = () => {

    const [bookData, setBookData] = useState(
        {
            bookTitle: '',
            bookAuthor: '',
            bookDescription: '',
            bookCover: '',
            bookPages: 0,
            bookPublished: ''
        }
    )
    //page refresh is default behavior for a form submit, 
    //since we are an SPA we do NOT want to refresh
    //the DOM calls our function handler with the first parameter being the event obj itself
    // the event object will reference where it came from
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const res = await axios.post('http://localhost:9000/books',{
                title: bookData.bookTitle,
                author: bookData.bookAuthor,
                description: bookData.bookDescription,
                coverUrl: bookData.bookCover,
                numPgs: bookData.bookPages,
                releaseDate: bookData.bookPublished
            });
            console.log("NEW BOOK");
            console.log(res.data);
            setBookData(bookList => [...bookList, res.data])
        } catch (err) {
            console.log(err);
        }

        console.log(bookData);
    }

    const handleClear = () => {
        setBookData(  {
            bookTitle: '',
            bookAuthor: '',
            bookDescription: '',
            bookCover: '',
            bookPages: 0,
            bookPublished: ''
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="book-name">Title</label>
                <input id="book-name" 
                       placeholder="ex. Murder Mystery Book Title" 
                       value={bookData.bookTitle}
                       onChange={e =>setBookData({...bookData, bookTitle: e.target.value})}
                /> 
            </div>
            <div>
                <label htmlFor="author-name">Author</label>
                <input id="author-name" 
                       placeholder="ex. Jessica Fletcher" 
                       value={bookData.bookAuthor}
                       onChange={e =>setBookData({...bookData, bookAuthor: e.target.value})}
                /> 
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input id="description" 
                       placeholder="ex. Plot synopsis goes here" 
                       value={bookData.bookDescription}
                       onChange={e =>setBookData({...bookData, bookDescription: e.target.value})}
                /> 
            </div>
            <div>
                <label htmlFor="numberPages">Pages</label>
                <input id="numberPages" 
                       placeholder="ex. 305" 
                       value={bookData.bookPages}
                       onChange={e =>setBookData({...bookData, bookPages: e.target.value})}
                /> 
            </div>
            <div>
                <label htmlFor="datePublished">Published</label>
                <input id="datePublished" 
                       placeholder="12/15/1984" 
                       value={bookData.bookPublished}
                       onChange={e =>setBookData({...bookData, bookPublished: e.target.value})}
                /> 
            </div>
            <div>
                <label htmlFor="imgURL">Image URL</label>
                <input id="imgURL" 
                       placeholder="ex. https://someImg.com/img1.jpg" 
                       value={bookData.bookCover}
                       onChange={e =>setBookData({...bookData, bookCover: e.target.value})}
                /> 
            </div>
            <button type="reset" onClick={handleClear}>Clear</button>
            <button>Submit</button>
        </form>

    );
}