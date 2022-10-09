import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages';

import './App.css';
import { BookDetails } from './pages/BookDetails';

export const App = () => {
  return (
    
     <BrowserRouter>
    
    <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/books/:id" element={<BookDetails />} />  
    </Routes>
    
    </BrowserRouter> 
  );
}


