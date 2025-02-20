import React from 'react';
import { MapPin, Phone, Globe, Instagram, Twitter, Facebook, Youtube, Check, X, Star, AlertTriangle, Clock } from 'lucide-react';
import type { Dispensary } from '../types/dispensary';

interface DispensaryCardProps {
  dispensary: Dispensary;
}

export function DispensaryCard({ dispensary }: DispensaryCardProps) {
  if (dispensary.business_status === 'CLOSED_PERMANENTLY' || dispensary.business_status === "CLOSED_TEMPORARILY") {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/50 dark:bg-gray-900/70 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{dispensary.name}</h2>
            <p className="text-red-600 dark:text-red-400 font-semibold">This dispensary is no longer available</p>
          </div>
        </div>
        
        <div className="opacity-50 pointer-events-none">
          <DispensaryContent dispensary={dispensary} />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4">
      {!dispensary.delivery && (
        <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 mb-6">
          <div className="flex items-center">
            <AlertTriangle className="w-5 h-5 text-amber-500 mr-2" />
            <p className="text-amber-700 dark:text-amber-400 font-medium">
              This dispensary does not offer delivery services. In-store pickup only.
            </p>
          </div>
        </div>
      )}
      <DispensaryContent dispensary={dispensary} />
    </div>
  );
}

function DispensaryContent({ dispensary }: DispensaryCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Column - Basic Info */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{dispensary.name}</h2>
        
        <div className="flex items-start gap-2">
          <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-400 mt-1" />
          <div>
            <p className="text-gray-600 dark:text-gray-300">{dispensary.address}</p>
            <p className="text-gray-600 dark:text-gray-300">{dispensary.city}, {dispensary.state} {dispensary.zipCode}</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < Math.floor(dispensary.rating || 0)
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300 dark:text-gray-600'
              }`}
            />
          ))}
          <span className="ml-2 text-gray-600 dark:text-gray-400">({dispensary.reviewCount} reviews)</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          {dispensary.business_status === 'OPERATIONAL' ? (
            <span className="text-green-600 dark:text-green-400 font-medium flex items-center gap-2">
              Open
              <span className="text-gray-600 dark:text-gray-400 text-sm font-normal">
                • Closes at 10PM
              </span>
            </span>
          ) : (
            <span className="text-red-600 dark:text-red-400 font-medium flex items-center gap-2">
              Closed
              <span className="text-gray-600 dark:text-gray-400 text-sm font-normal">
                • Opens tomorrow at 9AM
              </span>
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <a href={`tel:${dispensary.phone}`} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            <Phone className="w-4 h-4" />
            {dispensary.phone}
          </a>
          <a href={dispensary.website!} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            <Globe className="w-4 h-4" />
            Website
          </a>
          <div className="flex gap-3">
            {dispensary.instagram && (
              <a href={dispensary.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400">
                <Instagram className="w-5 h-5" />
              </a>
            )}
            {dispensary.twitter && (
              <a href={dispensary.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-400">
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {dispensary.facebook && (
              <a href={dispensary.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Facebook className="w-5 h-5" />
              </a>
            )}
            {dispensary.youtube && (
              <a href={dispensary.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400">
                <Youtube className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* ID & Parking Section */}
        <div className="space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">ID & Parking</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              {dispensary.medicalId ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-gray-700 dark:text-gray-300">Medical ID</span>
            </li>
            <li className="flex items-center gap-2">
              {dispensary.driversLicense ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-gray-700 dark:text-gray-300">Driver's License</span>
            </li>
            <li className="flex items-center gap-2">
              {dispensary.freeParking ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-gray-700 dark:text-gray-300">Free Parking Lot</span>
            </li>
            <li className="flex items-center gap-2">
              {dispensary.freeStreetParking ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-gray-700 dark:text-gray-300">Free Street Parking</span>
            </li>
            <li className="flex items-center gap-2">
              {dispensary.onSiteParking ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-gray-700 dark:text-gray-300">On-site Parking</span>
            </li>
            <li className="flex items-center gap-2">
              {dispensary.paidStreetParking ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-gray-700 dark:text-gray-300">Paid Street Parking</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Middle Column - Features & Products */}
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Shopping & Payments</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              {dispensary.delivery ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-gray-700 dark:text-gray-300">Delivery</span>
            </li>
            <li className="flex items-center gap-2">
              {dispensary.curbsidePickup ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-gray-700 dark:text-gray-300">Curbside Pickup</span>
            </li>
            <li className="flex items-center gap-2">
              {dispensary.inStorePickup ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-gray-700 dark:text-gray-300">In-Store Shopping</span>
            </li>
            <li className="flex items-center gap-2">
              {dispensary.onsiteServices ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-gray-700 dark:text-gray-300">Onsite Services</span>
            </li>
            <li className="flex items-center gap-2">
              {dispensary.orderOnline ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-gray-700 dark:text-gray-300">Order Online</span>
            </li>
            <li className="flex items-center gap-2">
              {dispensary.callToOrder ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-gray-700 dark:text-gray-300">Call to Order</span>
            </li>
            <li className="flex items-center gap-2">
              {dispensary["Accepts Credit Cards"] ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-gray-700 dark:text-gray-300">Accepts Credit Cards</span>
            </li>
            <li className="flex items-center gap-2">
              {dispensary["Accepts Debit Cards"] ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-gray-700 dark:text-gray-300">Accepts Debit Cards</span>
            </li>
            <li className="flex items-center gap-2">
              {dispensary.cashOnly ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-gray-700 dark:text-gray-300">Cash Only</span>
            </li>
            <li className="flex items-center gap-2">
              {dispensary.digitalCurrency ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-gray-700 dark:text-gray-300">Digital Currency Options</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Products</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              {dispensary.flower ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-gray-700 dark:text-gray-300">Flower</span>
            </li>
            <li className="flex items-center gap-2">
              {dispensary.preRolls ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-gray-700 dark:text-gray-300">Pre-Rolls</span>
            </li>
            <li className="flex items-center gap-2">
              {dispensary.edibles ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-gray-700 dark:text-gray-300">Edibles</span>
            </li>
            <li className="flex items-center gap-2">
              {dispensary.concentrates ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-gray-700 dark:text-gray-300">Concentrates</span>
            </li>
            <li className="flex items-center gap-2">
              {dispensary.topicals ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-gray-700 dark:text-gray-300">Topicals</span>
            </li>
            <li className="flex items-center gap-2">
              {dispensary.cbd ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <X className="w-5 h-5 text-red-500" />
              )}
              <span className="text-gray-700 dark:text-gray-300">CBD</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Column - Map */}
      <div>
        <div className="h-full min-h-[300px] rounded-lg overflow-hidden">
          <iframe
            title={`Map of ${dispensary.name}`}
            width="100%"
            height="100%"
            style={{ minHeight: '300px' }}
            frameBorder="0"
            src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(
              `${dispensary.latitude},${dispensary.longitude}`
            )}`}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}