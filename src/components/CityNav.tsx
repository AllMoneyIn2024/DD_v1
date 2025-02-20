import React from 'react';

interface CityNavProps {
  selectedCity: string;
  onCityChange: (city: string) => void;
}

const cities = [
  'Anchorage',
  'Ann Arbor',
  'Baltimore',
  'Boston',
  'Buffalo',
  'Chicago',
  'Denver',
  'Detroit',
  'Kansas City',
  'Las Vegas',
  'Los Angeles',
  'Miami',
  'New York City',
  'Phoenix',
  'Portland',
  'Providence',
  'Sacramento',
  'San Francisco',
  'Seattle',
  'Washington D.C.'
];

export function CityNav({ selectedCity, onCityChange }: CityNavProps) {
  return (
    <nav className="py-4 mb-8 border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
      <ul className="flex space-x-6 min-w-max">
        {cities.map((city) => (
          <li key={city}>
            <button
              onClick={() => onCityChange(city)}
              className={`text-sm font-medium transition-colors ${
                selectedCity === city
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {city}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}