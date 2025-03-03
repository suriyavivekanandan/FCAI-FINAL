import React, { useState } from 'react';
import { format } from 'date-fns';

interface FoodItem {
  id: string;
  foodItem: string;
  remainingWeight: number;
}

interface Booking {
  id: string;
  personName: string;
  contactNumber: string;
  trustName: string;
  foodItem: string;
  bookedAt: string;
}

function BookingEntry() {
  const [selectedFoodId, setSelectedFoodId] = useState('');
  const [bookingForm, setBookingForm] = useState({
    personName: '',
    contactNumber: '',
    trustName: '',
  });

  // TODO: Fetch from Supabase
  const availableFoodItems: FoodItem[] = [
    {
      id: '1',
      foodItem: 'Rice',
      remainingWeight: 3.5,
    },
    // Add more sample data as needed
  ];

  const bookings: Booking[] = [
    {
      id: '1',
      personName: 'John Doe',
      contactNumber: '1234567890',
      trustName: 'Food Trust',
      foodItem: 'Rice',
      bookedAt: format(new Date(), 'yyyy-MM-dd HH:mm'),
    },
    // Add more sample data as needed
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit to Supabase
    console.log({ ...bookingForm, foodId: selectedFoodId });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Booking Management</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Available Food Items</h2>
          <div className="grid grid-cols-1 gap-4">
            {availableFoodItems.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-800">{item.foodItem}</h3>
                    <p className="text-sm text-gray-600">
                      Remaining: {item.remainingWeight} kg
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedFoodId(item.id)}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedFoodId && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Booking Form</h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Person Name
                  </label>
                  <input
                    type="text"
                    value={bookingForm.personName}
                    onChange={(e) => setBookingForm({ ...bookingForm, personName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    value={bookingForm.contactNumber}
                    onChange={(e) => setBookingForm({ ...bookingForm, contactNumber: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Trust Name
                  </label>
                  <input
                    type="text"
                    value={bookingForm.trustName}
                    onChange={(e) => setBookingForm({ ...bookingForm, trustName: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Submit Booking
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Booking History</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Person Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact Number
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Trust Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Food Item
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Booked At
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {booking.personName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {booking.contactNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {booking.trustName}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {booking.foodItem}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {booking.bookedAt}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingEntry;