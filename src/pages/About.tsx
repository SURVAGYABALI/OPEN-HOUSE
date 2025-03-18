import React, { useEffect, useRef } from 'react';
import { GraduationCap, Brain, Users } from 'lucide-react';

const About = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const images = galleryRef.current?.querySelectorAll('.gallery-item');
    images?.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80",
      title: "Innovation Lab",
      description: "Students working on cutting-edge projects"
    },
    {
      url: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80",
      title: "Robotics Workshop",
      description: "Hands-on experience with advanced robotics"
    },
    {
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80",
      title: "Research Center",
      description: "State-of-the-art research facilities"
    },
    {
      url: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80",
      title: "Student Projects",
      description: "Showcasing innovative student work"
    },
    {
      url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
      title: "Laboratory Sessions",
      description: "Modern lab equipment and facilities"
    },
    {
      url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80",
      title: "Collaborative Learning",
      description: "Students working together on projects"
    }
  ];

  return (
    <div className="bg-cosmic-blue">
      {/* Hero Section */}
      <div className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-cosmic-text text-transparent bg-clip-text mb-4">About PEC Open House</h1>
            <p className="text-xl text-blue-100">Discover the spirit of innovation and excellence</p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg mx-auto">
          <h2 className="text-3xl font-bold bg-gradient-cosmic-text text-transparent bg-clip-text mb-6">Welcome to PEC Open House 2025</h2>
          <p className="text-gray-300 mb-8">
            The PEC Open House is an annual showcase of innovation, creativity, and academic excellence. 
            This event offers a unique opportunity for prospective students, parents, and the general public 
            to experience firsthand the vibrant academic and research environment at Punjab Engineering College.
          </p>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold bg-gradient-cosmic-text text-transparent bg-clip-text mb-12 text-center">Experience PEC</h2>
        <div 
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative group overflow-hidden rounded-lg">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-blue via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Attend Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center bg-gradient-cosmic-text text-transparent bg-clip-text mb-12">Why Attend?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
              <GraduationCap className="w-12 h-12 text-cosmic-yellow mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Career Exposure</h3>
              <p className="text-gray-300">
                Get firsthand insights into various engineering disciplines and career paths
                through interactive sessions with faculty and students.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
              <Brain className="w-12 h-12 text-cosmic-pink mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Hands-on Learning</h3>
              <p className="text-gray-300">
                Experience practical demonstrations, workshops, and interactive exhibits
                that showcase real-world applications of engineering concepts.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
              <Users className="w-12 h-12 text-cosmic-orange mb-4" />
              <h3 className="text-xl font-semibold text-white mb-4">Networking</h3>
              <p className="text-gray-300">
                Connect with current students, alumni, and faculty members to gain
                valuable insights into life at PEC.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Director's Message */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="images/Director-Sir-PEC_0.png"
                alt="Director"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-cosmic-yellow font-semibold">
                Message from the Director
              </div>
              <h3 className="mt-2 text-2xl font-semibold text-white">Prof. Rajesh Kumar Bhatia</h3>
              <p className="mt-4 text-gray-300">
                "Welcome to PEC Open House 2025! This event represents our commitment to fostering 
                innovation and excellence in engineering education. We invite you to explore our 
                campus, interact with our brilliant students and faculty, and witness the cutting-edge 
                research and projects that make PEC a leading institution in technical education."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;