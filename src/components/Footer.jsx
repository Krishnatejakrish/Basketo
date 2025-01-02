import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold">About Us</h2>
            <p className="mt-2 text-gray-400">
              We are committed to providing quality products and services to our customers.
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="mt-2">
              <li><a href="/" className="text-gray-400 hover:underline">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:underline">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:underline">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <p className="mt-2 text-gray-400">Email: info@example.com</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;