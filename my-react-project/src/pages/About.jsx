import React from 'react';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-pink-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">

     
        <div className="bg-gradient-to-r from-pink-200 to-blue-200 py-12 px-8 text-center">
          <h1 className="text-4xl font-bold text-pink-400 mb-4">About Our Skincare Marketplace</h1>
          <p className="text-blue-400 text-lg max-w-2xl mx-auto">
            Your trusted destination for the finest skincare brands from around the world
          </p>
        </div>

        {/* Our Story */}
        <div className="p-8 bg-gradient-to-r from-pink-200 to-blue-200">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">Our Story</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              
              <div>
                <p className="text-blue-900 mb-4">
                  Founded in 2018, our marketplace was created with a simple vision: to bring together 
                  the world's best skincare brands in one convenient place. We carefully curate our 
                  collection to ensure every product meets our high standards for quality and effectiveness.
                </p>
                <p className="text-blue-900">
                  We're not manufacturers—we're connoisseurs of great skincare. Our team researches 
                  and tests products from established favorites and emerging brands to create a 
                  selection that addresses every skin concern and type.
                </p>
              </div>
            </div>
          </div>

      
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-blue-800 mb-8 text-center">Why Shop With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Curated Selection</h3>
                <p className="text-blue-700">
                  We handpick each brand and product, saving you time and ensuring quality.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Expert Guidance</h3>
                <p className="text-blue-700">
                  Our skincare enthusiasts provide personalized recommendations for your needs.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌎</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Global Brands</h3>
                <p className="text-blue-700">
                  Discover international skincare treasures all in one place.
                </p>
              </div>
            </div>
          </div>

      
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-blue-800 mb-6 text-center">Our Curatorial Philosophy</h2>
            <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200">
              <p className="text-blue-900 mb-4">
                We believe that great skincare shouldn't be a mystery or a luxury. Our team carefully 
                evaluates each brand based on:
              </p>
              <ul className="list-disc list-inside text-blue-900 ml-4 space-y-2">
                <li><span className="font-semibold">Ingredient quality</span> - We prioritize brands with proven formulations</li>
                <li><span className="font-semibold">Brand ethics</span> - Cruelty-free and sustainable practices matter to us</li>
                <li><span className="font-semibold">Effectiveness</span> - We look for products that deliver real results</li>
                <li><span className="font-semibold">Value</span> - We offer options across different price points</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

     
    </div>
     <Footer />
     </>
  );
};

export default About;
