/*
  # Food Waste Management System Schema

  1. New Tables
    - `meal_types`
      - `id` (uuid, primary key)
      - `name` (text) - Name of the meal type (breakfast, lunch, dinner, snack)
    
    - `food_items`
      - `id` (uuid, primary key)
      - `name` (text) - Name of the food item
      - `created_at` (timestamp)
    
    - `food_entries`
      - `id` (uuid, primary key)
      - `user_id` (uuid) - Reference to auth.users
      - `food_item_id` (uuid) - Reference to food_items
      - `meal_type_id` (uuid) - Reference to meal_types
      - `initial_weight` (decimal) - Initial weight in kg
      - `remaining_weight` (decimal, nullable) - Remaining weight in kg
      - `entry_date` (date) - Date of the entry
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `bookings`
      - `id` (uuid, primary key)
      - `food_entry_id` (uuid) - Reference to food_entries
      - `person_name` (text)
      - `contact_number` (text)
      - `trust_name` (text)
      - `booked_at` (timestamp)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create meal types table
CREATE TABLE meal_types (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now()
);

-- Create food items table
CREATE TABLE food_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now()
);

-- Create food entries table
CREATE TABLE food_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  food_item_id uuid REFERENCES food_items NOT NULL,
  meal_type_id uuid REFERENCES meal_types NOT NULL,
  initial_weight decimal NOT NULL CHECK (initial_weight > 0),
  remaining_weight decimal CHECK (remaining_weight >= 0 AND remaining_weight <= initial_weight),
  entry_date date NOT NULL DEFAULT CURRENT_DATE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create bookings table
CREATE TABLE bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  food_entry_id uuid REFERENCES food_entries NOT NULL,
  person_name text NOT NULL,
  contact_number text NOT NULL,
  trust_name text NOT NULL,
  booked_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE meal_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE food_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE food_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access to meal types"
  ON meal_types FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow public read access to food items"
  ON food_items FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can read all food entries"
  ON food_entries FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can insert their own food entries"
  ON food_entries FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own food entries"
  ON food_entries FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can read all bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create bookings"
  ON bookings FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Insert initial meal types
INSERT INTO meal_types (name) VALUES
  ('Breakfast'),
  ('Lunch'),
  ('Dinner'),
  ('Snack');

-- Insert sample food items
INSERT INTO food_items (name) VALUES
  ('Rice'),
  ('Bread'),
  ('Curry'),
  ('Pasta'),
  ('Salad'),
  ('Soup'),
  ('Noodles'),
  ('Vegetables'),
  ('Fruits'),
  ('Dessert');