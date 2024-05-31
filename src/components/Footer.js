import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              convallis nunc a luctus consequat.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
            <ul className="text-gray-300">
              <li className="mb-2">Contact Us</li>
              <li className="mb-2">Shipping Information</li>
              <li className="mb-2">Returns &amp; Exchanges</li>
              <li className="mb-2">FAQs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Categories</h3>
            <ul className="text-gray-300">
              <li className="mb-2">Clothing</li>
              <li className="mb-2">Shoes</li>
              <li className="mb-2">Accessories</li>
              <li className="mb-2">Electronics</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
            <ul className="text-gray-900">
              <li className="mb-2">
                <form className="flex">
                  <input
                    type="email"
                    className="border border-gray-400 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
                  >
                    Subscribe
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="flex justify-between">
          <div className="text-gray-300">
            Payment Methods (like visa, mastercard, bkash, rocket, nuggat)
          </div>
          <div className="text-gray-300">
            Online Shopping International (Bangladesh, India, USA, UK, Pakistan)
          </div>
          <div className="text-gray-300">
            Follow Us (Facebook, Instagram, YouTube, Twitter)
          </div>
          <div className="text-gray-300">
            <span style={{ color: "blue", fontWeight: "bold" }}>OSID</span>
            <br />
            Registration number: coming soon
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-gray-300">
            &copy; 2023 online shop. All rights reserved.
          </p>
          <ul className="flex gap-4">
            <li>
              <p className="text-gray-300 hover:text-white">Terms of Service</p>
            </li>
            <li>
              <p className="text-gray-300 hover:text-white">Privacy Policy</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
