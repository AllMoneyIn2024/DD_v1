import React, { useState } from 'react';
import { FilterBar } from './components/FilterBar';
import { DispensaryCard } from './components/DispensaryCard';
import { ThemeToggle } from './components/ThemeToggle';
import { CityNav } from './components/CityNav';
import { Footer } from './components/Footer';
import type { Dispensary } from './types/dispensary';

// City to state mapping
const cityStateMap: Record<string, string> = {
  'Anchorage': 'AK',
  'Ann Arbor': 'MI',
  'Baltimore': 'MD',
  'Boston': 'MA',
  'Buffalo': 'NY',
  'Chicago': 'IL',
  'Denver': 'CO',
  'Detroit': 'MI',
  'Kansas City': 'MO',
  'Las Vegas': 'NV',
  'Los Angeles': 'CA',
  'Miami': 'FL',
  'New York City': 'NY',
  'Phoenix': 'AZ',
  'Portland': 'OR',
  'Providence': 'RI',
  'Sacramento': 'CA',
  'San Francisco': 'CA',
  'Seattle': 'WA',
  'Washington D.C.': 'DC'
};

// Mock data for demonstration
const mockDispensaries: Dispensary[] = [
  {
    id: '1',
    name: 'Green Leaf Dispensary',
    address: '123 Cannabis Street',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90210',
    latitude: 34.0522,
    longitude: -118.2437,
    phone: '(555) 123-4567',
    website: 'https://example.com',
    socialMedia: {
      instagram: 'https://instagram.com/greenleaf',
      twitter: 'https://twitter.com/greenleaf',
      facebook: 'https://facebook.com/greenleaf',
      youtube: 'https://youtube.com/greenleaf'
    },
    features: {
      acceptsCreditCards: true,
      inStorePickup: true,
      delivery: true,
      hasParking: true,
      orderOnline: true,
      callToOrder: true,
      curbsidePickup: true
    },
    products: {
      flower: true,
      edibles: true,
      concentrates: true,
      preRolls: true,
      topicals: false,
      cbd: true
    },
    rating: 4.5,
    reviewCount: 128,
    status: 'open'
  },
  {
    id: '2',
    name: 'Purple Haze Collective',
    address: '456 Herb Avenue',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90012',
    latitude: 34.0549,
    longitude: -118.2426,
    phone: '(555) 987-6543',
    website: 'https://example.com',
    socialMedia: {
      instagram: 'https://instagram.com/purplehaze',
      facebook: 'https://facebook.com/purplehaze'
    },
    features: {
      acceptsCreditCards: true,
      inStorePickup: true,
      delivery: false,
      hasParking: true,
      orderOnline: true,
      callToOrder: false,
      curbsidePickup: false
    },
    products: {
      flower: true,
      edibles: true,
      concentrates: false,
      preRolls: true,
      topicals: true,
      cbd: false
    },
    rating: 4.2,
    reviewCount: 95,
    status: 'open'
  },
  {
    id: '3',
    name: 'Emerald City Cannabis',
    address: '789 Wellness Blvd',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90015',
    latitude: 34.0535,
    longitude: -118.2398,
    phone: '(555) 246-8135',
    website: 'https://example.com',
    socialMedia: {
      instagram: 'https://instagram.com/emeraldcity',
      twitter: 'https://twitter.com/emeraldcity'
    },
    features: {
      acceptsCreditCards: true,
      inStorePickup: true,
      delivery: true,
      hasParking: false,
      orderOnline: false,
      callToOrder: true,
      curbsidePickup: true
    },
    products: {
      flower: true,
      edibles: true,
      concentrates: true,
      preRolls: true,
      topicals: true,
      cbd: true
    },
    rating: 4.8,
    reviewCount: 156,
    status: 'closed'
  }
];

function App() {
  const [filters, setFilters] = useState({});
  const [selectedCity, setSelectedCity] = useState('Los Angeles');

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <CityNav selectedCity={selectedCity} onCityChange={setSelectedCity} />
        
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{selectedCity} Delivery Dispensaries</h1>
            <p className="text-gray-600 dark:text-gray-400">
              Find the best dispensaries in {selectedCity}
              {selectedCity !== 'Washington D.C.' && `, ${cityStateMap[selectedCity]}`}
            </p>
          </div>
          <ThemeToggle />
        </header>

        <FilterBar onFilterChange={setFilters} />

        <div className="space-y-6 mb-12">
          {mockDispensaries.map(dispensary => (
            <DispensaryCard key={dispensary.id} dispensary={dispensary} />
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App