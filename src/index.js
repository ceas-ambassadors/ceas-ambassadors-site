import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.scss';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Members from './components/pages/Members';
import Events from './components/pages/Events';
import Training from './components/pages/Training';
import StudentOrgs from './components/pages/StudentOrgs';
import Resources from './components/pages/Resources';
import Apply from './components/pages/Apply';
import Settings from './components/pages/Settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} >
            <Route path="members" element={<Members/>}/>
            <Route path="events" element={<Events/>}/>
            <Route path="training" element={<Training/>}/>
            <Route path="student-orgs" element={<StudentOrgs/>}/>
            <Route path="resources" element={<Resources/>}/>
            <Route path="apply" element={<Apply dueDate='May 23, 2023' />}/>
            <Route path="settings" element={<Settings/>}/>
        </Route>
    </Routes>
  </BrowserRouter>
);
