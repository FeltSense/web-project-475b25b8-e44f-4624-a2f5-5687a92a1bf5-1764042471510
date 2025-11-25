import React from 'react';
import Image from 'next/image';
import { Search, Video, Users, Home } from 'lucide-react';

const Services = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Real Estate Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience luxury property search with cutting-edge technology and personalized service
          </p>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Card 1 - Large with Image */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
            <div className="relative h-64 md:h-80 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" 
                alt="Luxury Property Showcase"
                width={800}
                height={600}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-6 left-6 bg-yellow-600 p-4 rounded-xl shadow-lg">
                <Home className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Property Showcase Carousel
              </h3>
              <p className="text-gray-600 text-lg">
                Explore stunning properties through our immersive full-width hero galleries. High-resolution imagery and seamless navigation bring every detail to life, showcasing the luxury and elegance of each estate.
              </p>
            </div>
          </div>

          {/* Small Card 1 - Icon Only */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
            <div className="bg-yellow-50 p-4 rounded-xl w-fit mb-6">
              <Search className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Advanced Search Filters
            </h3>
            <p className="text-gray-600">
              Refine your search with precision filters for location, price range, bedrooms, bathrooms, and property type. Find your dream home faster.
            </p>
          </div>

          {/* Small Card 2 - Icon Only */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
            <div className="bg-yellow-50 p-4 rounded-xl w-fit mb-6">
              <Video className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Virtual Tour Integration
            </h3>
            <p className="text-gray-600">
              Experience properties from anywhere with 360° virtual tours and interactive galleries. Walk through homes remotely with stunning clarity.
            </p>
          </div>

          {/* Featured Card 2 - Large with Image */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
            <div className="relative h-64 md:h-80 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80" 
                alt="Professional Real Estate Agents"
                width={800}
                height={600}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-6 left-6 bg-yellow-600 p-4 rounded-xl shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Expert Agent Profiles
              </h3>
              <p className="text-gray-600 text-lg">
                Connect with our elite team of real estate professionals. View detailed agent profiles featuring expertise, credentials, client testimonials, and direct contact options for personalized service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
