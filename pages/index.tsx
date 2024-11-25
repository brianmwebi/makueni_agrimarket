// pages/index.tsx
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>Makueni AgriMarket</title>
        <meta
          name="description"
          content="Makueni AgriMarket - Connecting farmers and buyers for a thriving agricultural community."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Navbar */}
        <nav className="bg-green-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Makueni AgriMarket</h1>
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-green-100 py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-green-700">
              Welcome to Makueni AgriMarket
            </h2>
            <p className="mt-4 text-lg text-green-800">
              Your one-stop platform for buying, selling, and discovering agricultural produce in Makueni.
            </p>
            <div className="mt-8">
              <a
                href="#get-started"
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800">About Us</h3>
            <p className="mt-4 text-lg text-gray-700">
              Makueni AgriMarket connects farmers directly to buyers, fostering transparency and fair trade in the agricultural sector.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800">Features</h3>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-green-50 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-green-700">Buy & Sell</h4>
                <p className="mt-2 text-gray-600">
                  List and discover a wide range of agricultural products.
                </p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-green-700">Secure Payments</h4>
                <p className="mt-2 text-gray-600">
                  Enjoy secure and seamless transactions on our platform.
                </p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-green-700">Community Support</h4>
                <p className="mt-2 text-gray-600">
                  Connect with a vibrant community of farmers and buyers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-100">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800">Contact Us</h3>
            <p className="mt-4 text-lg text-gray-700">
              Have questions? Reach out to our team anytime.
            </p>
            <div className="mt-8">
              <a
                href="mailto:info@makueniagrimarket.com"
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-green-600 text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Makueni AgriMarket. All Rights Reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
