import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <i className="fas fa-globe mr-2"></i>
          <span>Language (EN)</span>
          <i className="fas fa-chevron-down ml-1"></i>
        </div>
        <div className="flex items-center">
          <button className="mr-4">Login</button>
          <button className="bg-green-600 px-4 py-2 rounded">Sign Up</button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-3xl font-bold">
          <span className="text-gray-700">MAKUENI</span>
          <span className="text-green-600">AGRIMARKET</span>
        </div>
        <div className="flex space-x-8">
          <a href="#" className="text-green-600">
            HOME
          </a>
          <a href="Market" className="text-gray-700">
            MARKET
          </a>
          <a href="/Cropcoverter" className="text-gray-700">
            CROP CONVERTER
          </a>
          <div className="relative">
            <a href="#" className="text-gray-700">
              ABOUT US
              
            </a>
            <i className="fas fa-chevron-down ml-1"></i>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">
        {/* Background Section */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg.jpg')" }}
        ></div>
        <div className="relative z-10 bg-opacity-0 bg-green-900 text-white p-8">
          <h1 className="text-4xl font-bold">
            A MAKUENI BASED MARKETPLACE WHERE FAIR FOOD TRADE IS MADE EASY, FAST AND TRANSPARENT!
          </h1>
          <p className="text-6xl font-bold mt-4">+2230</p>
          <p className="text-2xl">MAKUENI AGRIFOOD SELLERS & BUYERS</p>
          <button className="bg-white text-green-600 px-4 py-2 mt-4 rounded">JOIN NOW</button>
          <div className="flex space-x-4 mt-4">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        {/* Product Selection Section */}
        <div className="relative opacity-80 z-10 bg-green-600 text-white p-8 mt-8">
          <h2 className="text-2xl font-bold">SELECT A PRODUCT TO BUY/SELL</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col items-center">
              <i className="fas fa-wheat-awn text-4xl"></i>
              <link rel="stylesheet" href="/pages/grains.tsx" /><span className="mt-2">GRAINS</span> <link/>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-seedling text-4xl"></i>
              <span className="mt-2">NUTS</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-coffee text-4xl"></i>
              <span className="mt-2">GREEN COFFEE</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-oil-can text-4xl"></i>
              <span className="mt-2">OLIVE OIL & OTHER OILS</span>
            </div>
          </div>
          <p className="mt-4">CAN'T FIND THE PRODUCT YOU ARE LOOKING FOR?</p>
          <button className="bg-white text-green-600 px-4 py-2 mt-2 rounded">TALK TO US</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
