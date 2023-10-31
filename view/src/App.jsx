//import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { HomePage, AboutPage, GalleryPage, EventsPage, ErrorPage, DonatePage } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
