import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages';

import './App.css';

export const App = () => {
  return (
    <Home/>
/*     <BrowserRouter>
    
    <Routes>
        <Route path="/" element={<Home />} />  
    </Routes>
    
    </BrowserRouter> */
  );
}

