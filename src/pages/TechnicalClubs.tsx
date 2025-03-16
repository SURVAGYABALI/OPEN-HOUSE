import React from 'react';
import { Code, Notebook as Robot, Car, Cpu, Radio, Building, Sparkles } from 'lucide-react';

const TechnicalClubs = () => {
  return (
    <div className="bg-cosmic-blue">
      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-cosmic-text text-transparent bg-clip-text mb-4">Technical Clubs</h1>
            <p className="text-xl text-blue-100">Discover our technical societies and their innovations</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ACM Student Chapter */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-cosmic-yellow mr-3" />
                <h3 className="text-2xl font-bold text-white">ACM Student Chapter</h3>
              </div>
              <p className="text-gray-300 mb-4">
                The official student chapter of ACM at PEC, fostering computing knowledge and innovation.
              </p>
              <ul className="text-gray-300 space-y-2">
                {['Competitive Programming', 'Web Development', 'Machine Learning', 'Blockchain Technology'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-cosmic-pink" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Robotics Club */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Robot className="w-8 h-8 text-cosmic-pink mr-3" />
                <h3 className="text-2xl font-bold text-white">Robotics Club</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Building the future through robotics and automation technologies.
              </p>
              <ul className="text-gray-300 space-y-2">
                {['Autonomous Robots', 'Drone Technology', 'IoT Projects', 'Robot Wars'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-cosmic-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* SAE */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Car className="w-8 h-8 text-cosmic-orange mr-3" />
                <h3 className="text-2xl font-bold text-white">SAE India Collegiate Club</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Advancing mobility knowledge and solutions for the automotive industry.
              </p>
              <ul className="text-gray-300 space-y-2">
                {['BAJA SAE', 'Formula Student', 'Efficycle', 'Automotive Design'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-cosmic-yellow" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* IEEE Student Branch */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Cpu className="w-8 h-8 text-cosmic-yellow mr-3" />
                <h3 className="text-2xl font-bold text-white">IEEE Student Branch</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Promoting technological innovation and excellence in electronics and computing.
              </p>
              <ul className="text-gray-300 space-y-2">
                {['Technical Workshops', 'Research Projects', 'Technical Paper Presentations', 'Industry Visits'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-cosmic-pink" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* HAM Club */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Radio className="w-8 h-8 text-cosmic-pink mr-3" />
                <h3 className="text-2xl font-bold text-white">HAM Radio Club</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Exploring amateur radio communications and emergency response systems.
              </p>
              <ul className="text-gray-300 space-y-2">
                {['Radio Communications', 'Emergency Response', 'Signal Processing', 'Antenna Design'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-cosmic-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ASCE Student Chapter */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-colors">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <Building className="w-8 h-8 text-cosmic-orange mr-3" />
                <h3 className="text-2xl font-bold text-white">ASCE Student Chapter</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Advancing civil engineering knowledge and sustainable infrastructure solutions.
              </p>
              <ul className="text-gray-300 space-y-2">
                {['Structural Design', 'Environmental Engineering', 'Transportation Systems', 'Smart Cities'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-cosmic-yellow" />
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

export default TechnicalClubs;