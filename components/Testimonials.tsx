'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      quote: "Luxe Properties helped us find our dream penthouse in record time. Their understanding of luxury real estate and attention to every detail made the entire process seamless and enjoyable.",
      name: "Victoria Harrington",
      role: "CEO, Harrington Enterprises",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5
    },
    {
      id: 2,
      quote: "As an international investor, I needed a team that understood high-end property markets. Luxe Properties exceeded every expectation with their professionalism and market expertise.",
      name: "James Chen",
      role: "Private Investor",
      avatar: "https://i.pravatar.cc/150?img=13",
      rating: 5
    },
    {
      id: 3,
      quote: "From our first viewing to closing day, the Luxe Properties team provided white-glove service. They found us a waterfront estate that perfectly matched our lifestyle and investment goals.",
      name: "Isabella Martinez",
      role: "Entrepreneur & Philanthropist",
      avatar: "https://i.pravatar.cc/150?img=9",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by discerning clients for exceptional real estate service
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 bg-white p-4 rounded-full shadow-lg hover:bg-gray-50 transition-all text-gray-700"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 bg-white p-4 rounded-full shadow-lg hover:bg-gray-50 transition-all text-gray-700"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel with Large Avatar Layout */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="absolute top-8 right-8">
              <Quote className="w-16 h-16 text-gray-100" />
            </div>
            
            <div className="min-h-[400px] flex flex-col items-center">
              {/* Large Avatar at Top */}
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg mb-6">
                <Image 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Client Info */}
              <div className="text-center mb-6">
                <div className="font-bold text-gray-900 text-2xl mb-1">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-gray-600 text-lg">
                  {testimonials[activeIndex].role}
                </div>
              </div>

              {/* Large Star Rating */}
              <div className="flex gap-2 justify-center mb-8">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-700 italic text-center leading-relaxed max-w-3xl">
                "{testimonials[activeIndex].quote}"
              </blockquote>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-gray-900 w-10' 
                    : 'bg-gray-300 w-3 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail Preview */}
          <div className="flex justify-center gap-6 mt-12">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setActiveIndex(index)}
                className={`relative transition-all ${
                  index === activeIndex 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-40 scale-90 hover:opacity-70'
                }`}
                aria-label={`View testimonial from ${testimonial.name}`}
              >
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {index === activeIndex && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  </button>);
};

export default Testimonials;
