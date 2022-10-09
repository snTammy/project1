import { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import { BookList } from "../components/Form/BookList";
import { BookForm } from "../components/Form/BookForm";


export const Home = () => {
   
   
    return (
        <>
        <Link to="/books/new">Add a book</Link>
        <BookList/>
        
        </>
    );
}