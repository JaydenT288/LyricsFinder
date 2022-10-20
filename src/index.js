import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TrackProvider } from './TrackContext';
import Lyrics from './components/Lyrics';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TrackProvider>
      <Router>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/lyric/:id' element={<Lyrics />} />
        </Routes>
      </Router>
    </TrackProvider>
  </React.StrictMode>
);


