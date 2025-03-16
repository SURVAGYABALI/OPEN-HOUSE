import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Clock, Sparkles } from 'lucide-react';

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({ 
    days: 0, 
    hours: 0, 
    minutes: 0, 
    seconds: 0 
  });

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval: NodeJS.Timeout | null = null;
    const title = document.getElementById("title");
    
    if (title) {
      title.onmouseover = (event) => {
        let iteration = 0;
        clearInterval(interval as NodeJS.Timeout);
        
        interval = setInterval(() => {
          const target = event.target as HTMLElement;
          target.innerText = target.dataset.value!
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return target.dataset.value![index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
          
          if (iteration >= target.dataset.value!.length) {
            clearInterval(interval as NodeJS.Timeout);
          }
          
          iteration += 1 / 3;
        }, 30);
      };
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const eventDate = new Date('2025-04-23T09:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {/* Background with stars */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden bg-cosmic-blue">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='1' fill='white' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-blue/50 to-cosmic-blue"></div>
      </div> */}
      
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="public/images/Open_house_vid.mp4"
          type="video/mp4"
        />
      </video>
      

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <img 
                src="public/images/open_house.png"
                alt="Open House Logo" 
                className="h-24 md:h-32"
              />
            </div>
            <h1 
              className="text-4xl md:text-6xl font-bold bg-gradient-cosmic-text text-transparent bg-clip-text mb-6" 
              id="title"
              data-value="PEC Open House 2025"
            >
              PEC Open House 2025
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Experience Innovation, Engineering, and Excellence
            </p>

            {/* Event Details */}
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
              <div className="flex items-center justify-center text-cosmic-yellow">
                <Calendar className="w-6 h-6 mr-2" />
                <span>April 23rd, 2025</span>
              </div>
              <div className="flex items-center justify-center text-cosmic-pink">
                <MapPin className="w-6 h-6 mr-2" />
                <span>PEC Campus, Sector 12</span>
              </div>
              <div className="flex items-center justify-center text-cosmic-orange">
                <Clock className="w-6 h-6 mr-2" />
                <span>9:00 AM - 5:00 PM</span>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10">
                  <div className="text-4xl font-bold bg-gradient-cosmic-text text-transparent bg-clip-text">{value}</div>
                  <div className="text-white/80 capitalize">{unit}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://forms.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-cosmic text-cosmic-blue px-8 py-4 rounded-md text-lg font-bold hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Book Your Tour
              </a>
              <a
                href="#learn-more"
                className="border-2 border-white/20 text-white px-8 py-4 rounded-md text-lg font-bold hover:bg-white/10 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;