import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, BookNew } from './pages';


import { BookDetails } from './pages/BookDetails';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export const App = () => {
  return (
    
     <BrowserRouter>
    
    <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/books/new" exact element={<BookNew />} /> 
         <Route path="/books/:id" element={<BookDetails />} />  
    </Routes>
    
    </BrowserRouter> 
  );
}


