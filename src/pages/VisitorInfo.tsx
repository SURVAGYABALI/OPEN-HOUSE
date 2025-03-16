import React from 'react';
import { MapPin, Clock, Car, Bus, Train, Sparkles } from 'lucide-react';

const VisitorInfo = () => {
  return (
    <div className="bg-cosmic-blue">
      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-cosmic-text text-transparent bg-clip-text mb-4">Visitor Information</h1>
            <p className="text-xl text-blue-100">Everything you need to know for your visit</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Location Map */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold bg-gradient-cosmic-text text-transparent bg-clip-text mb-6">Campus Location</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.6766123235424!2d76.7843001!3d30.7673756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0d505d0b67%3A0x3dd08aa1f83b88!2sPunjab%20Engineering%20College!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Getting Here */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-cosmic-text text-transparent bg-clip-text mb-6">Getting Here</h2>
            <div className="space-y-6">
              <div className="flex items-start bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <Car className="w-6 h-6 text-cosmic-yellow mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-2">By Car</h3>
                  <p className="text-gray-300">
                    Located in Sector 12, Chandigarh. Parking available at the main entrance.
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <Bus className="w-6 h-6 text-cosmic-pink mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-2">By Bus</h3>
                  <p className="text-gray-300">
                    CTU buses available from various parts of the city. Nearest stop: PEC Market.
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                <Train className="w-6 h-6 text-cosmic-orange mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold text-white mb-2">By Train</h3>
                  <p className="text-gray-300">
                    Chandigarh Railway Station is 8km away. Take a taxi or bus to reach campus.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold bg-gradient-cosmic-text text-transparent bg-clip-text mb-6">Important Information</h2>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <ul className="space-y-4">
                <li className="flex items-center text-white">
                  <Clock className="w-5 h-5 text-cosmic-yellow mr-3" />
                  <span>Event Hours: 9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex items-center text-white">
                  <MapPin className="w-5 h-5 text-cosmic-pink mr-3" />
                  <span>Entry: Main Gate, Sector 12</span>
                </li>
                <li>
                  <p className="font-semibold text-white mb-2 flex items-center">
                    <Sparkles className="w-5 h-5 text-cosmic-orange mr-2" />
                    What to Bring:
                  </p>
                  <ul className="list-none text-gray-300 ml-8 space-y-2">
                    {['Photo ID', 'Registration Confirmation', 'Water Bottle', 'Comfortable Walking Shoes'].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-gradient-cosmic rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Campus Facilities */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-cosmic-text text-transparent bg-clip-text mb-6">Campus Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="font-semibold text-white mb-2 flex items-center">
                <Sparkles className="w-5 h-5 text-cosmic-yellow mr-2" />
                Cafeteria
              </h3>
              <p className="text-gray-300">
                Multiple food outlets available across campus serving refreshments and meals.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="font-semibold text-white mb-2 flex items-center">
                <Sparkles className="w-5 h-5 text-cosmic-pink mr-2" />
                First Aid
              </h3>
              <p className="text-gray-300">
                Medical assistance available at the campus dispensary near the administrative block.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="font-semibold text-white mb-2 flex items-center">
                <Sparkles className="w-5 h-5 text-cosmic-orange mr-2" />
                Restrooms
              </h3>
              <p className="text-gray-300">
                Available in all academic blocks and near common areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorInfo;