import React from 'react';

const AgriMarketplace = () => {
  return (
    <div>
      {/* Header Section */}
      

      {/* Navigation Section */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-4xl logo-text" aria-label="Agri Marketplace Logo">AGRI MARKETPLACE</span>
            <span className="text-green-500 ml-2">FAIRTRADE MADE EASY</span>
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900" aria-label="Home">HOME</a>
            <a href="#" className="text-gray-700 hover:text-gray-900" aria-label="Market">MARKET</a>
            <a href="#" className="text-green-500 hover:text-green-700" aria-label="Crop Converter">CROP CONVERTER</a>
            <div className="relative">
              <a href="#" className="text-gray-700 hover:text-gray-900" aria-label="About Us">ABOUT US</a>
              <i className="fas fa-caret-down ml-1" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Section */}
      <main className="container mx-auto text-center py-16">
        <h1 className="text-5xl text-green-500" aria-label="Crop Converter Title">CROP CONVERTER</h1>
      </main>
    </div>
  );
};

export default AgriMarketplace;
