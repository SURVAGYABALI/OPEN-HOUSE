import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cosmic-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-cosmic-yellow" />
              Contact Us
            </h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-cosmic-pink" />
                <a href="mailto:contact@pec.edu.in" className="hover:text-cosmic-yellow transition-colors">contact@pec.edu.in</a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-cosmic-orange" />
                <a href="tel:+911722753071" className="hover:text-cosmic-yellow transition-colors">+91-172-275-3071</a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-cosmic-yellow" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><a href="https://pec.ac.in" className="hover:text-cosmic-yellow transition-colors">PEC Website</a></li>
              <li><a href="https://forms.google.com" className="hover:text-cosmic-yellow transition-colors">Register for Open House</a></li>
              <li><a href="/visitor-info" className="hover:text-cosmic-yellow transition-colors">Campus Map</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-cosmic-yellow" />
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-cosmic-yellow transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-cosmic-pink transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-cosmic-orange transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/80">Mayank Lola pakadle mera ye le bana dia tera footer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;