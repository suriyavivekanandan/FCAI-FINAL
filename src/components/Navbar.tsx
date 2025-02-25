import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Utensils } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-blue-700' : '';
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Utensils className="h-6 w-6" />
            <span className="font-bold text-xl">Food Waste Management</span>
          </Link>
          
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 ${isActive('/')}`}
            >
              Home
            </Link>
            <Link
              to="/initial-entry"
              className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 ${isActive('/initial-entry')}`}
            >
              Initial Entry
            </Link>
            <Link
              to="/remaining-entry"
              className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 ${isActive('/remaining-entry')}`}
            >
              Remaining Entry
            </Link>
            <Link
              to="/data"
              className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 ${isActive('/data')}`}
            >
              Data
            </Link>
            <Link
  to="/analysis"
  className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 ${isActive('/analysis')}`}
>
  Analysis
</Link>
            <Link
              to="/bookings"
              className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 ${isActive('/bookings')}`}
            >
              Bookings
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );

  
}

export default Navbar;