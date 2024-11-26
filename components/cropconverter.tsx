import React, { useState } from 'react';

const CropConverter = () => {
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [currency, setCurrency] = useState('euro');
  const [unit, setUnit] = useState('METRIC TON');
  const [totalPrice, setTotalPrice] = useState(0); // Initialize as number


  const calculateTotalPrice = () => {
    const priceValue = parseFloat(price);
    const quantityValue = parseFloat(quantity);
    if (!isNaN(priceValue) && !isNaN(quantityValue)) {
      setTotalPrice(priceValue * quantityValue);
    }
  };

  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <i className="fas fa-globe mr-2" aria-hidden="true"></i>
          <span>Language (EN)</span>
          <i className="fas fa-caret-down ml-1" aria-hidden="true"></i>
        </div>
        <div className="flex items-center">
          <button className="mr-4" aria-label="Login">Login</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded" aria-label="Sign Up">Sign Up</button>
        </div>
      </div>

      {/* Title Section */}
      <div className="text-center mt-8">
        <h1 className="header-logo text-5xl" style={{ fontFamily: 'Great Vibes, cursive' }}>AGRI MARKETPLACE</h1>
        <p className="header-subtitle text-xl text-green-500" style={{ fontFamily: 'Roboto, sans-serif' }}>FAIRTRADE MADE EASY</p>
      </div>

      {/* Navigation Section */}
      <div className="flex justify-center mt-8">
        <nav className="flex space-x-8">
          <a href="/" className="text-gray-700 hover:text-green-500">HOME</a>
          <a href="/Market" className="text-gray-700 hover:text-green-500">MARKET</a>
          <a href="" className="text-gray-700 hover:text-green-500">CROP CONVERTER</a>
          <a href="" className="text-gray-700 hover:text-green-500">ABOUT US</a>
        </nav>
      </div>

      {/* Crop Converter Section */}
      <div className="text-center mt-16">
        <h2 className="converter-title text-6xl text-green-500" style={{ fontFamily: 'Great Vibes, cursive' }}>CROP CONVERTER</h2>
      </div>

      {/* Conversion Form */}
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product">PRODUCT</label>
            <select id="product" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option>CORN</option><option>GREEN GRAMS</option><option>MANGOS</option><option>AVOCADO</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">PRICE / UNIT</label>
            <input
              id="price"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="mb-4 flex items-center">
            <label className="block text-gray-700 text-sm font-bold mb-2 mr-4" htmlFor="currency">CURRENCY</label>
            <div className="flex items-center">
              <input
                id="euro"
                type="radio"
                name="currency"
                className="mr-2"
                checked={currency === 'euro'}
                onChange={() => setCurrency('euro')}
              />
              <label htmlFor="euro" className="mr-4">KSH</label>

              <input
                id="usd"
                type="radio"
                name="currency"
                className="mr-2"
                checked={currency === 'usd'}
                onChange={() => setCurrency('usd')}
              />
              <label htmlFor="usd">USD</label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantity">QUANTITY</label>
            <input
              id="quantity"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="unit">UNIT</label>
            <select
              id="unit"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              <option>METRIC TON</option> <option>POUND</option> <option>KILOGRAMS</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="total-price">TOTAL PRICE</label>
            <input
              id="total-price"
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={totalPrice}
              disabled
            />
          </div>

          {/* Calculate Button */}
          <div className="flex justify-center">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={calculateTotalPrice}
              aria-label="Calculate Total Price"
            >
              Calculate Total Price
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropConverter;
