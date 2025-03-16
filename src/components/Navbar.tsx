import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-cosmic-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-cosmic-yellow" />
            <span className="text-xl font-bold bg-gradient-cosmic-text text-transparent bg-clip-text">PEC Open House</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:bg-white/10 px-3 py-2 rounded-md">Home</Link>
              <Link to="/about" className="hover:bg-white/10 px-3 py-2 rounded-md">About</Link>
              <Link to="/schedule" className="hover:bg-white/10 px-3 py-2 rounded-md">Schedule</Link>
              <Link to="/technical-clubs" className="hover:bg-white/10 px-3 py-2 rounded-md">Technical Clubs</Link>
              <Link to="/cultural-clubs" className="hover:bg-white/10 px-3 py-2 rounded-md">Cultural Clubs</Link>
              <Link to="/visitor-info" className="hover:bg-white/10 px-3 py-2 rounded-md">Visitor Info</Link>
              <a 
                href="https://forms.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-cosmic text-cosmic-blue px-4 py-2 rounded-md font-bold hover:opacity-90 transition-opacity"
              >
                Register Now
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:bg-white/10 px-3 py-2 rounded-md">Home</Link>
            <Link to="/about" className="block hover:bg-white/10 px-3 py-2 rounded-md">About</Link>
            <Link to="/schedule" className="block hover:bg-white/10 px-3 py-2 rounded-md">Schedule</Link>
            <Link to="/technical-clubs" className="block hover:bg-white/10 px-3 py-2 rounded-md">Technical Clubs</Link>
            <Link to="/cultural-clubs" className="block hover:bg-white/10 px-3 py-2 rounded-md">Cultural Clubs</Link>
            <Link to="/visitor-info" className="block hover:bg-white/10 px-3 py-2 rounded-md">Visitor Info</Link>
            <a 
              href="https://forms.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block bg-gradient-cosmic text-cosmic-blue px-4 py-2 rounded-md font-bold hover:opacity-90 transition-opacity text-center"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;