import React from 'react';
import { Calendar, MapPin, Clock, Sparkles } from 'lucide-react';

const Schedule = () => {
  return (
    <div className="bg-cosmic-blue">
      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-cosmic-text text-transparent bg-clip-text mb-4">Event Schedule</h1>
            <p className="text-xl text-blue-100">Plan your visit to PEC Open House</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Morning Session */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-cosmic-text text-transparent bg-clip-text mb-6">Morning Session (9:00 AM - 1:00 PM)</h2>
            <div className="bg-white/5 backdrop-blur-sm overflow-hidden rounded-md border border-white/10">
              <ul className="divide-y divide-white/10">
                <li className="p-4 hover:bg-white/5 transition-colors">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-lg font-semibold text-white">Registration and Welcome Kit Distribution</p>
                      <p className="text-gray-300">Main Entrance</p>
                    </div>
                    <p className="text-cosmic-yellow">9:00 AM - 9:30 AM</p>
                  </div>
                </li>
                <li className="p-4 hover:bg-white/5 transition-colors">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-lg font-semibold text-white">Inaugural Ceremony</p>
                      <p className="text-gray-300">Main Auditorium</p>
                    </div>
                    <p className="text-cosmic-pink">9:30 AM - 10:30 AM</p>
                  </div>
                </li>
                <li className="p-4 hover:bg-white/5 transition-colors">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-lg font-semibold text-white">Department Tours - Group A</p>
                      <p className="text-gray-300">Various Departments</p>
                    </div>
                    <p className="text-cosmic-orange">10:30 AM - 1:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Afternoon Session */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-cosmic-text text-transparent bg-clip-text mb-6">Afternoon Session (2:00 PM - 5:00 PM)</h2>
            <div className="bg-white/5 backdrop-blur-sm overflow-hidden rounded-md border border-white/10">
              <ul className="divide-y divide-white/10">
                <li className="p-4 hover:bg-white/5 transition-colors">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-lg font-semibold text-white">Department Tours - Group B</p>
                      <p className="text-gray-300">Various Departments</p>
                    </div>
                    <p className="text-cosmic-yellow">2:00 PM - 3:30 PM</p>
                  </div>
                </li>
                <li className="p-4 hover:bg-white/5 transition-colors">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-lg font-semibold text-white">Interactive Sessions with Faculty</p>
                      <p className="text-gray-300">Department Seminar Halls</p>
                    </div>
                    <p className="text-cosmic-pink">3:30 PM - 4:30 PM</p>
                  </div>
                </li>
                <li className="p-4 hover:bg-white/5 transition-colors">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-lg font-semibold text-white">Closing Ceremony</p>
                      <p className="text-gray-300">Main Auditorium</p>
                    </div>
                    <p className="text-cosmic-orange">4:30 PM - 5:00 PM</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Tour Details */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-cosmic-text text-transparent bg-clip-text mb-6">Tour Itinerary</h2>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-cosmic-yellow" />
                Departments Covered:
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cosmic-yellow rounded-full mr-2"></span>
                  Aerospace Engineering
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cosmic-pink rounded-full mr-2"></span>
                  Computer Science & Engineering
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cosmic-orange rounded-full mr-2"></span>
                  Electronics & Communication
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cosmic-yellow rounded-full mr-2"></span>
                  Mechanical Engineering
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cosmic-pink rounded-full mr-2"></span>
                  Production & Industrial Engineering
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cosmic-orange rounded-full mr-2"></span>
                  Civil Engineering
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cosmic-yellow rounded-full mr-2"></span>
                  Electrical Engineering
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cosmic-pink rounded-full mr-2"></span>
                  Metallurgical Engineering
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;