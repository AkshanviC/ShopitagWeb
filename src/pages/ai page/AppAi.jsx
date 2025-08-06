import React from "react";

// Main App component that renders the entire single-page application.
export default function AppAi() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800">
      {/* Tailwind CSS CDN script - added here for a self-contained example */}
      <script src="https://cdn.tailwindcss.com"></script>

      {/* Header and Hero Section */}
      <header className="bg-blue-900 text-white p-6 md:p-12">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo or App Name */}
          <h1 className="text-3xl font-extrabold tracking-tight">Shoplink</h1>
          {/* Navigation links (hidden on mobile, can be expanded with a hamburger menu) */}
          <nav className="hidden md:flex space-x-6 text-lg">
            <a href="#" className="hover:text-blue-200 transition duration-300">
              About
            </a>
            <a href="#" className="hover:text-blue-200 transition duration-300">
              Features
            </a>
            <a href="#" className="hover:text-blue-200 transition duration-300">
              Pricing
            </a>
            <a href="#" className="hover:text-blue-200 transition duration-300">
              Contact
            </a>
          </nav>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto text-center mt-16 md:mt-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Managing your small business made easy
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
            A simple and powerful tool for entrepreneurs to manage their shop
            orders, inventory, and customers.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            {/* The three mobile screens from the design */}
            <img
              src="https://placehold.co/200x400/CCCCCC/000000?text=Mobile+Screen+1"
              alt="Mobile app screen showing the order list"
              className="w-48 h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://placehold.co/200x400/CCCCCC/000000?text=Mobile+Screen+2"
              alt="Mobile app screen showing a product details page"
              className="w-48 h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://placehold.co/200x400/CCCCCC/000000?text=Mobile+Screen+3"
              alt="Mobile app screen showing a new order form"
              className="w-48 h-auto rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </header>

      {/* Feature Section 1 */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto text-center px-4">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Seamless, effortless order management
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Stay on top of every order with a simple, intuitive interface that
            helps you manage everything from a single dashboard.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            <img
              src="https://placehold.co/250x500/E8E8E8/333333?text=Mobile+Screen+4"
              alt="Mobile app screen showing order details"
              className="w-64 h-auto rounded-3xl shadow-xl"
            />
            <div className="text-left max-w-md">
              <h4 className="text-2xl font-semibold text-blue-800">
                Your Sales, Your Way
              </h4>
              <p className="mt-2 text-gray-700">
                Track all your sales and revenue in real-time, get detailed
                reports, and make informed business decisions with a tap of a
                button.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2 */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto text-center px-4">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Print your labels, ship with ease
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Generate and print professional shipping labels directly from the
            app, saving you time and effort.
          </p>
          <div className="flex flex-col-reverse md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-left max-w-md">
              <h4 className="text-2xl font-semibold text-blue-800">
                In to your hands
              </h4>
              <p className="mt-2 text-gray-700">
                With our integrated printing feature, you can create and print
                labels instantly, streamlining your fulfillment process.
              </p>
            </div>
            <img
              src="https://placehold.co/250x500/E8E8E8/333333?text=Mobile+Screen+5"
              alt="Mobile app screen showing a label generation interface"
              className="w-64 h-auto rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Feature Section 3 */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto text-center px-4">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Print, share & grow your business
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Connect with your customers and grow your brand with easy sharing
            and customizable content.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            <img
              src="https://placehold.co/250x500/E8E8E8/333333?text=Mobile+Screen+6"
              alt="Mobile app screen showing sharing options"
              className="w-64 h-auto rounded-3xl shadow-xl"
            />
            <div className="text-left max-w-md">
              <h4 className="text-2xl font-semibold text-blue-800">
                Share your products
              </h4>
              <p className="mt-2 text-gray-700">
                Easily share product listings and promotions with your social
                media followers and customers, right from the app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Copyright */}
          <div>
            <img
              src="https://placehold.co/150x50/FFFFFF/000000?text=Shoplink+Logo"
              alt="Shoplink Logo"
              className="h-12 mb-4"
            />
            <p className="text-sm opacity-70">
              &copy; {new Date().getFullYear()} Shoplink. All rights reserved.
            </p>
          </div>

          {/* Footer Navigation */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-lg mb-2">Company</h5>
              <ul className="space-y-1 text-sm opacity-90">
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-lg mb-2">Resources</h5>
              <ul className="space-y-1 text-sm opacity-90">
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h5 className="font-semibold text-lg mb-2">Contact Us</h5>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 rounded-lg bg-blue-800 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg bg-blue-800 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-blue-800 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-100 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
