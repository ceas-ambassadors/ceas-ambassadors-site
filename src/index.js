import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Members from './components/pages/Members';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} >
            <Route path="members" element={<Members/>}/>
        </Route>
    </Routes>
  </BrowserRouter>
);
