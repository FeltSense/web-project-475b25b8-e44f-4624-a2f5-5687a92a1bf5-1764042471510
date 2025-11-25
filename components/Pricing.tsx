'use client';

import React from 'react';
import { Check, Crown, Shield, Star, Zap, ArrowRight, Sparkles } from 'lucide-react';

const Pricing = () => {
  const features = [
    { icon: Crown, text: 'Premium Property Showcase' },
    { icon: Sparkles, text: 'Luxury Design Templates' },
    { icon: Star, text: 'Mobile-Responsive Layout' },
    { icon: Shield, text: 'SSL Security & Hosting' },
    { icon: Zap, text: 'Fast 24-Hour Delivery' },
    { icon: Check, text: 'SEO Optimization Included' },
    { icon: Check, text: 'Contact Form Integration' },
    { icon: Check, text: 'Lifetime Updates & Support' }
  ];

  const handleCheckout = () => {
    window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00';
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 fill-current" />
            LIMITED TIME OFFER
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Luxury Property Website
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional real estate website designed for luxury properties
          </p>
        </div>

        {/* Main Pricing Card - Hero Style */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-gold-600 rounded-3xl blur-xl opacity-20"></div>
            
            {/* Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Top Badge */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-4">
                <div className="flex items-center justify-center gap-2">
                  <Crown className="w-5 h-5" />
                  <span className="font-bold text-lg">BEST VALUE FOR LUXURY PROPERTIES</span>
                  <Crown className="w-5 h-5" />
                </div>
              </div>

              <div className="p-12">
                {/* Price Section */}
                <div className="text-center mb-12">
                  <div className="mb-4">
                    <span className="text-gray-500 text-xl line-through">$199</span>
                  </div>
                  <div className="flex items-baseline justify-center gap-3 mb-4">
                    <span className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-gold-600 bg-clip-text text-transparent">
                      $29
                    </span>
                    <div className="text-left">
                      <div className="text-gray-900 font-semibold text-xl">one-time</div>
                      <div className="text-gray-600 text-sm">payment</div>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 font-medium">
                    Complete luxury property website delivered in 24 hours
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-10">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                          <Icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-gray-700 font-medium">{feature.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg px-10 py-6 rounded-xl transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group"
                >
                  Get Your Luxury Website - $29
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Trust Badges */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span>Secure Stripe Payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-600" />
                    <span>Instant Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-gold-600 fill-current" />
                    <span>100% Satisfaction</span>
                  </div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="h-2 bg-gradient-to-r from-blue-600 via-gold-600 to-blue-600"></div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">Trusted by luxury real estate professionals worldwide</p>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-gold-600 fill-current" />
            ))}
            <span className="ml-2 text-gray-700 font-semibold">4.9/5 from 200+ clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
