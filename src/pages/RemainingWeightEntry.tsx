import React from 'react';
import { format } from 'date-fns';

interface FoodCard {
  id: string;
  foodItem: string;
  mealType: string;
  initialWeight: number;
  date: string;
}

function RemainingWeightEntry() {
  // TODO: Fetch from Supabase
  const foodCards: FoodCard[] = [
    {
      id: '1',
      foodItem: 'Rice',
      mealType: 'Lunch',
      initialWeight: 5.0,
      date: format(new Date(), 'yyyy-MM-dd'),
    },
    // Add more sample data as needed
  ];

  const handleRemainingWeight = (id: string, weight: number) => {
    // TODO: Update in Supabase
    console.log('Updating remaining weight:', { id, weight });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Remaining Weight Entry</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodCards.map((card) => (
          <div key={card.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800">{card.foodItem}</h3>
              <p className="text-gray-600">{card.mealType}</p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Date: {card.date}</p>
              <p className="text-sm text-gray-600">Initial Weight: {card.initialWeight} kg</p>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Remaining Weight (kg)
              </label>
              <div className="flex space-x-2">
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max={card.initialWeight}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter weight"
                  onChange={(e) => handleRemainingWeight(card.id, parseFloat(e.target.value))}
                />
                <button
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RemainingWeightEntry;