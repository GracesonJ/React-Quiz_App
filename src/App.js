import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Quiz from './Components/Quiz';
function App() {
  return (
    <> 
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/quiz' element={<Quiz/>} />

     </Routes>
    </>
  );
}

export default App;
