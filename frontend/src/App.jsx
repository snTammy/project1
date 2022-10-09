import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, BookNew } from './pages';

import './App.css';
import { BookDetails } from './pages/BookDetails';
import './index.css';

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


