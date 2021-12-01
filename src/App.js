import React from 'react';
import './App.css'; 
import Header from './components/Header';
import {HomePage} from './components/HomePage';
import {LoginPage} from './components/LoginPage';
import {RegisterPage} from './components/RegisterPage';
import {  
  Route,
  Routes
} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signin' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
};  

export default App;
