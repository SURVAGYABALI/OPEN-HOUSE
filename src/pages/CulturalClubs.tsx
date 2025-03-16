import React from 'react';
import { Speech, Camera, Mic, Palette, Theater, Sparkles } from 'lucide-react';

const CulturalClubs = () => {
  return (
    <div className="bg-cosmic-blue">
      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-cosmic-text text-transparent bg-clip-text mb-4">Cultural Clubs</h1>
            <p className="text-xl text-blue-100">Experience the artistic side of PEC</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* SAASC Featured Section */}
        <div className="mb-16">
          <div className="bg-gradient-cosmic rounded-lg shadow-xl overflow-hidden">
            <div className="bg-cosmic-blue/90 p-8">
              <div className="flex items-center mb-6">
                <Speech className="w-12 h-12 text-white mr-4" />
                <h2 className="text-3xl font-bold text-white">Speakers Association And Study Circle (SAASC)</h2>
              </div>
              <p className="text-white text-lg mb-6">
                The premier cultural society dedicated to promoting arts and cultural activities.
                Leading innovation in creative expression and performance arts.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Cultural Events</h3>
                  <p className="text-blue-100">Organizing major cultural festivals and performances</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Art Workshops</h3>
                  <p className="text-blue-100">Hands-on learning experiences in various art forms</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Cultural Exchange</h3>
                  <p className="text-blue-100">Promoting cultural diversity and understanding</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Cultural Clubs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Photography Club */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Camera className="w-8 h-8 text-cosmic-yellow mr-3" />
                <h3 className="text-2xl font-bold text-white">Photography Club</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Capturing moments and telling stories through the lens.
              </p>
              <ul className="text-gray-300 space-y-2">
                {['Photo Walks', 'Photography Workshops', 'Exhibition Events', 'Competition Opportunities'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-cosmic-pink" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Music Club */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Mic className="w-8 h-8 text-cosmic-pink mr-3" />
                <h3 className="text-2xl font-bold text-white">Music Club</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Bringing harmony to campus life through music and performance.
              </p>
              <ul className="text-gray-300 space-y-2">
                {['Band Performances', 'Musical Workshops', 'Open Mic Events', 'Music Festivals'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-cosmic-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Art Club */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Palette className="w-8 h-8 text-cosmic-orange mr-3" />
                <h3 className="text-2xl font-bold text-white">English Editorial board</h3>
              </div>
              <p className="text-gray-300 mb-4">
              The English Editorial Board is a group of free-minded people who are passionate about the English language and writing.
              </p>
              <ul className="text-gray-300 space-y-2">
                {['Bakchodi Sessions', 'Bakschodi Workshops', 'Bakschodi Exhibitions', 'Bakschodi Competitions'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-cosmic-yellow" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Dramatics Club */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Theater className="w-8 h-8 text-cosmic-yellow mr-3" />
                <h3 className="text-2xl font-bold text-white">Dramatics Club</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Bringing stories to life through theatrical performances.
              </p>
              <ul className="text-gray-300 space-y-2">
                {['Theater Productions', 'Acting Workshops', 'Street Plays', 'Improv Sessions'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-cosmic-pink" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalClubs;