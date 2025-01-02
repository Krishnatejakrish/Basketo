import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation (if using React Router)
import { FaCartPlus } from "react-icons/fa";
import { ProductContext } from '../context/ProductContext';

const Navbar = () => {
  const cartLength = useContext(ProductContext).cartItems.length;

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md sticky top-0 z-10">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src="https://www.seekpng.com/png/detail/255-2559986_10-business-benefits-of-our-ecommerce-application-development.png"
            alt="Basketo"
            className="h-16 w-40 rounded-lg"
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-8 text-lg font-semibold uppercase hidden md:flex">
        <li>
          <Link to="/" className="hover:text-gray-400 transition duration-300">Home</Link>
        </li>
        <li>
          <Link to="/products" className="hover:text-gray-400 transition duration-300">All Products</Link>
        </li>
        <li className="relative flex items-center text-3xl">
          <Link to="/cart" className="hover:text-gray-400 transition duration-300 text-4xl ">
            <FaCartPlus />
            <span className="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 text-xs rounded-full">
              {cartLength}
            </span>
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-2xl">
          <FaCartPlus />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
