import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import Error from './components/Error';
import "./App.css"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/item/:id" element={<PostDetail/>} />
        <Route path='*' element={<Error />}/>
      </Routes>
    </Router>
  );
};

export default App;