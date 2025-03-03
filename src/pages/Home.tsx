import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ClipboardList, Database, CalendarCheck } from 'lucide-react';

function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Food Waste Management System
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          to="/initial-weight"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center mb-4">
            <Scale className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Initial Weight Entry</h2>
          </div>
          <p className="text-gray-600">Record initial weights for different food items and meal types.</p>
        </Link>

        <Link
          to="/remaining-weight"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center mb-4">
            <ClipboardList className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Remaining Weight Entry</h2>
          </div>
          <p className="text-gray-600">Update remaining weights for recorded food items.</p>
        </Link>

        <Link
          to="/data"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center mb-4">
            <Database className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Data Overview</h2>
          </div>
          <p className="text-gray-600">View comprehensive data about food entries and waste management.</p>
        </Link>

        <Link
          to="/booking"
          className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center mb-4">
            <CalendarCheck className="h-8 w-8 text-green-600 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Booking Management</h2>
          </div>
          <p className="text-gray-600">Manage food bookings by trusts and organizations.</p>
        </Link>
      </div>

      <div className="mt-12 p-6 bg-green-50 rounded-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">About the System</h3>
        <p className="text-gray-600 leading-relaxed">
          Our Food Waste Management System helps organizations track and manage food waste efficiently.
          By recording initial and remaining weights, we can better understand consumption patterns
          and minimize waste. The system also facilitates food donation through our booking system,
          ensuring that excess food reaches those in need through trusted organizations.
        </p>
      </div>
    </div>
  );
}

export default Home;