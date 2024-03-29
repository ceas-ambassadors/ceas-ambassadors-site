import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.scss';
import App from './App';
import { BrowserRouter, Routes, Route, Redirect, Navigate } from 'react-router-dom';
import Home from './components/pages/Home';
import Members from './components/pages/Members';
import Events from './components/pages/Events/Events';
import EventDetails from './components/pages/Events/EventDetails';
import Training from './components/pages/Training';
import StudentOrgs from './components/pages/StudentOrgs';
import Resources from './components/pages/Resources';
import Apply from './components/pages/Apply';
import Settings from './components/pages/Settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>} >
          <Route path="home" element={<Home/>}/>
          <Route path="members" element={<Members/>}/>
          <Route path="events" element={<Events/>}/>
            <Route path="events/:id" element={<EventDetails/>}/>
          <Route path="training" element={<Training/>}/>
          <Route path="student-orgs" element={<StudentOrgs/>}/>
          <Route path="resources" element={<Resources/>}/>
          <Route path="apply" element={<Apply dueDate='May 23, 2023' />}/>
          <Route path="settings" element={<Settings/>}/>
        </Route>
    </Routes>
  </BrowserRouter>
);
