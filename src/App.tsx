import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import InitialEntry from './pages/InitialEntry';
import RemainingEntry from './pages/RemainingEntry';
import DataView from './pages/DataView';
import Bookings from './pages/Bookings';
import FoodAnalysis from './pages/FoodAnalysis'; // Add this import
import { signInAnonymously } from './lib/supabase';

function App() {
  useEffect(() => {
    signInAnonymously();
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/initial-entry" element={<InitialEntry />} />
            <Route path="/remaining-entry" element={<RemainingEntry />} />
            <Route path="/data" element={<DataView />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/analysis" element={<FoodAnalysis />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;