import React, { useState } from 'react';
import { format } from 'date-fns';

interface FoodEntry {
  mealType: string;
  foodItem: string;
  weight: number;
}

function InitialWeightEntry() {
  const [entries, setEntries] = useState<FoodEntry[]>([{ mealType: '', foodItem: '', weight: 0 }]);
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));

  const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];
  const foodItems = ['Rice', 'Bread', 'Curry', 'Pasta', 'Salad', 'Soup', 'Noodles', 'Vegetables', 'Fruits', 'Dessert'];

  const handleAddDish = () => {
    setEntries([...entries, { mealType: '', foodItem: '', weight: 0 }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit to Supabase
    console.log({ date, entries });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Initial Weight Entry</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {entries.map((entry, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-md mb-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meal Type
                  </label>
                  <select
                    value={entry.mealType}
                    onChange={(e) => {
                      const newEntries = [...entries];
                      newEntries[index].mealType = e.target.value;
                      setEntries(newEntries);
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  >
                    <option value="">Select Meal Type</option>
                    {mealTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Food Item
                  </label>
                  <select
                    value={entry.foodItem}
                    onChange={(e) => {
                      const newEntries = [...entries];
                      newEntries[index].foodItem = e.target.value;
                      setEntries(newEntries);
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  >
                    <option value="">Select Food Item</option>
                    {foodItems.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Initial Weight (kg)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={entry.weight || ''}
                    onChange={(e) => {
                      const newEntries = [...entries];
                      newEntries[index].weight = parseFloat(e.target.value);
                      setEntries(newEntries);
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                    min="0"
                  />
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={handleAddDish}
              className="px-4 py-2 text-sm font-medium text-green-600 border border-green-600 rounded-md hover:bg-green-50"
            >
              Add Another Dish
            </button>

            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
            >
              Save Entries
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InitialWeightEntry;