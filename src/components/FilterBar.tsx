import React, { useState } from 'react';
import { Filter, CreditCard, Store, Leaf, Clock, Accessibility, Building2, MapPin, ChevronDown, ChevronUp, FileCheck, Car } from 'lucide-react';

interface FilterBarProps {
  onFilterChange: (filters: any) => void;
}

export function FilterBar({ onFilterChange }: FilterBarProps) {
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [localFilters, setLocalFilters] = useState({
        acceptsCreditCards: false,
        delivery: false,
        openNow: false,
        flower: false, // Example for product filters
        // Add other filter options here, matching your Supabase columns and desired filter behavior
  });

  // Handle checkbox changes and update the localFilters state
    const handleCheckboxChange = (filterName: string, value: boolean) => {
        setLocalFilters(prevFilters => {
            const updatedFilters = { ...prevFilters, [filterName]: value };
            onFilterChange(updatedFilters); // Notify App.tsx about the filter change
            return updatedFilters;
        });
    };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md p-4 mb-6 rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Payment Methods */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="font-medium text-gray-900 dark:text-white">Payment Methods</span>
          </div>
          <div className="space-y-1">
            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700" 
                  checked={localFilters.acceptsCreditCards}
                  onChange={(e) => handleCheckboxChange('acceptsCreditCards', e.target.checked)}/>
              <span>Accepts Credit Cards</span>
            </label>
            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700"
                onChange={(e) => handleCheckboxChange('acceptsDebitCards', e.target.checked)}
              />
              <span>Accepts Debit Cards</span>
            </label>
            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700" 
                onChange={(e) => handleCheckboxChange('cashOnly', e.target.checked)}
              />
              <span>Cash Only</span>
            </label>
            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700"
                onChange={(e) => handleCheckboxChange('digitalCurrency', e.target.checked)}
               />
              <span>Digital Currency Options</span>
            </label>
          </div>
        </div>

        {/* Shopping Options */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Store className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="font-medium text-gray-900 dark:text-white">Shopping Options</span>
          </div>
          <div className="space-y-1">
            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700" 
                checked={localFilters.delivery}
                onChange={(e) => handleCheckboxChange('delivery', e.target.checked)}
              />
              <span>Delivery</span>
            </label>
            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700" 
                onChange={(e) => handleCheckboxChange('curbsidePickup', e.target.checked)}
              />
              <span>Curbside Pickup</span>
            </label>
            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700" 
                onChange={(e) => handleCheckboxChange('inStorePickup', e.target.checked)}
              />
              <span>In-Store Shopping</span>
            </label>
            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700" 
                onChange={(e) => handleCheckboxChange('onsiteServices', e.target.checked)}
              />
              <span>Onsite Services</span>
            </label>
            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700" 
                onChange={(e) => handleCheckboxChange('orderOnline', e.target.checked)}
              />
              <span>Order Online</span>
            </label>
            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700" 
                onChange={(e) => handleCheckboxChange('callToOrder', e.target.checked)}
              />
              <span>Call to Order</span>
            </label>
          </div>
        </div>

        {/* Products */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Leaf className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="font-medium text-gray-900 dark:text-white">Product Types</span>
          </div>
          <div className="space-y-1">
            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700" 
                checked={localFilters.flower}
                onChange={(e) => handleCheckboxChange('flower', e.target.checked)}
              />
              <span>Flower</span>
            </label>
            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700"
                onChange={(e) => handleCheckboxChange('preRolls', e.target.checked)}
               />
              <span>Pre-Rolls</span>
            </label>
            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700"
                onChange={(e) => handleCheckboxChange('edibles', e.target.checked)}
               />
              <span>Edibles</span>
            </label>
            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700" 
                onChange={(e) => handleCheckboxChange('concentrates', e.target.checked)}
              />
              <span>Concentrates</span>
            </label>
            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700" 
                onChange={(e) => handleCheckboxChange('topicals', e.target.checked)}
              />
              <span>Topicals</span>
            </label>
            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700" 
                onChange={(e) => handleCheckboxChange('cbd', e.target.checked)}
              />
              <span>CBD</span>
            </label>
          </div>
        </div>

        {/* ID Requirements */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="font-medium text-gray-900 dark:text-white">ID Requirements</span>
          </div>
          <div className="space-y-1">
            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700" 
                onChange={(e) => handleCheckboxChange('medicalId', e.target.checked)}
              />
              <span>Medical ID</span>
            </label>
            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700" 
                onChange={(e) => handleCheckboxChange('driversLicense', e.target.checked)}
              />
              <span>Driver's License</span>
            </label>
          </div>
        </div>

        {/* Hours of Operation */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            <span className="font-medium text-gray-900 dark:text-white">Hours of Operation</span>
          </div>
          <div className="space-y-1">
            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700"
                onChange={(e) => handleCheckboxChange('service24Hours', e.target.checked)}
               />
              <span>24-Hour Service</span>
            </label>
            <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700"
                checked={localFilters.openNow}
                onChange={(e) => handleCheckboxChange('openNow', e.target.checked)}
               />
              <span>Open Now</span>
            </label>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowMoreFilters(!showMoreFilters)}
        className="mt-4 flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
      >
        {showMoreFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        {showMoreFilters ? 'Show Less Filters' : 'Show More Filters'}
      </button>

      {showMoreFilters && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          {/* Accessibility */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Accessibility className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="font-medium text-gray-900 dark:text-white">Accessibility</span>
            </div>
            <div className="space-y-1">
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700"
                    onChange={(e) => handleCheckboxChange('wheelchairAccessibleEntrance', e.target.checked)}
                 />
                <span>Wheelchair Accessible Entrance</span>
              </label>
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700" 
                    onChange={(e) => handleCheckboxChange('wheelchairAccessibleParkingLot', e.target.checked)}
                />
                <span>Wheelchair Accessible Parking Lot</span>
              </label>
            </div>
          </div>

          {/* Parking */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="font-medium text-gray-900 dark:text-white">Parking</span>
            </div>
            <div className="space-y-1">
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700" 
                  onChange={(e) => handleCheckboxChange('freeParkingLot', e.target.checked)}
                />
                <span>Free Parking Lot</span>
              </label>
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700" 
                  onChange={(e) => handleCheckboxChange('freeStreetParking', e.target.checked)}
                />
                <span>Free Street Parking</span>
              </label>
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700"
                  onChange={(e) => handleCheckboxChange('onSiteParking', e.target.checked)}
                 />
                <span>On-site Parking</span>
              </label>
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700"
                  onChange={(e) => handleCheckboxChange('paidStreetParking', e.target.checked)}
                 />
                <span>Paid Street Parking</span>
              </label>
            </div>
          </div>

          {/* Ownership & Business Type */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="font-medium text-gray-900 dark:text-white">Ownership & Business Type</span>
            </div>
            <div className="space-y-1">
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700" 
                  onChange={(e) => handleCheckboxChange('blackOwned', e.target.checked)}
                />
                <span>Black-Owned</span>
              </label>
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700"
                  onChange={(e) => handleCheckboxChange('latinoOwned', e.target.checked)}
                 />
                <span>Latino-Owned</span>
              </label>
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700"
                  onChange={(e) => handleCheckboxChange('lgbtqOwned', e.target.checked)}
                 />
                <span>LGBTQ+-Owned</span>
              </label>
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700" 
                  onChange={(e) => handleCheckboxChange('asianOwned', e.target.checked)}
                />
                <span>Asian-Owned</span>
              </label>
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700"
                  onChange={(e) => handleCheckboxChange('indigenousOwned', e.target.checked)}
                 />
                <span>Indigenous-Owned</span>
              </label>
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700" 
                  onChange={(e) => handleCheckboxChange('veteranOwned', e.target.checked)}
                />
                <span>Veteran-Owned</span>
              </label>
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700" 
                  onChange={(e) => handleCheckboxChange('disabledOwned', e.target.checked)}
                />
                <span>Disabled-Owned</span>
              </label>
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700" 
                  onChange={(e) => handleCheckboxChange('smallBusiness', e.target.checked)}
                />
                <span>Small Business</span>
              </label>
            </div>
          </div>

          {/* Location Specific Filters */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              <span className="font-medium text-gray-900 dark:text-white">Location Specific</span>
            </div>
            <div className="space-y-1">
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700"
                  onChange={(e) => handleCheckboxChange('recentlyInspected', e.target.checked)}
                 />
                <span>Recently Inspected</span>
              </label>
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700"
                  onChange={(e) => handleCheckboxChange('passedCompliance', e.target.checked)}
                 />
                <span>Passed Compliance</span>
              </label>
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700"
                  onChange={(e) => handleCheckboxChange('downtownArea', e.target.checked)}
                 />
                <span>Downtown Area</span>
              </label>
              <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <input type="checkbox" className="rounded text-blue-600 dark:bg-gray-700" 
                  onChange={(e) => handleCheckboxChange('nearPublicTransit', e.target.checked)}
                />
                <span>Near Public Transit</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}