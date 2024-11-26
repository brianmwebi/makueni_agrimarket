import Head from 'next/head';
import Link from 'next/link';

export default function Market() {
  return (
    <>
      <Head>
        <title>AgriMarketplace</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-gray-800 text-white py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <i className="fas fa-globe mr-2"></i>
            <span>Language (EN)</span>
            <i className="fas fa-chevron-down ml-1"></i>
          </div>
          <div>
            <Link href="/register">
            <button className="bg-green-600 text-white px-4 py-2 rounded">Sign Up</button>
            </Link>
            
            <button className="text-white px-4 py-2">Login</button>
          </div>
        </div>
      </div>
      <div className="bg-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://storage.googleapis.com/a1aa/image/hvOWqulXOqI0P931m8oCPl8wJGfEUblmeE4Z7x9aWzKyTi0TA.jpg"
              alt="AgriMarketplace Logo"
              width="150"
              height="50"
              className="mr-4"
            />
            <span className="text-green-600 font-bold text-xl">TRADING MADE EASIER</span>
          </div>
          <div className="flex space-x-8">
            <a href="/" className="text-gray-800 hover:text-green-600">
              HOME
            </a>
            <a href="#" className="text-gray-800 hover:text-green-600">
              MARKET
            </a>
            <a href="/Cropcoverter" className="text-gray-800 hover:text-green-600">
              CROP CONVERTER
            </a>
            <div className="relative">
              <a href="#" className="text-gray-800 hover:text-green-600">
                ABOUT US
              </a>
              <i className="fas fa-chevron-down ml-1"></i>
            </div>
          </div>
        </div>
      </div>
      <div
        className="background-image text-white py-20"
        style={{
          backgroundImage: "url('/images/bg 2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-8">SELECT A PRODUCT TO BUY/SELL</h1>
          <div className="flex justify-center space-x-4 mb-8">
            <Link href="/grains">
            <button className="bg-white text-green-600 font-bold py-2 px-4 rounded">GRAINS</button>
            </Link>
            <button className="bg-white text-green-600 font-bold py-2 px-4 rounded">NUTS</button>
            <button className="bg-white text-green-600 font-bold py-2 px-4 rounded">
              GREEN COFFEE
            </button>
            <button className="bg-white text-green-600 font-bold py-2 px-4 rounded">
              OLIVE OIL &amp; OTHER OILS
            </button>
          </div>
          <hr className="border-white mb-8" />
          <p className="mb-4">CAN'T FIND THE PRODUCT YOU ARE LOOKING FOR?</p>
          <button className="bg-white text-green-600 font-bold py-2 px-4 rounded">TALK TO US</button>
        </div>
      </div>
    </>
  );
}
