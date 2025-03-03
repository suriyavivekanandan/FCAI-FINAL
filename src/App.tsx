import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import InitialWeightEntry from './pages/InitialWeightEntry';
import RemainingWeightEntry from './pages/RemainingWeightEntry';
import DataPage from './pages/DataPage';
import BookingEntry from './pages/BookingEntry';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/initial-weight" element={<InitialWeightEntry />} />
            <Route path="/remaining-weight" element={<RemainingWeightEntry />} />
            <Route path="/data" element={<DataPage />} />
            <Route path="/booking" element={<BookingEntry />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;