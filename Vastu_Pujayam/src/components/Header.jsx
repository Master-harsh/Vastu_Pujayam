import React from "react";
import { FaHeart, FaShoppingBag, FaSearch } from "react-icons/fa";

function Header() {
  return (
    <div className="bg-white shadow-md py-3 px-6 flex items-center justify-between">
      {/* Left - Logo */}
      <div className="flex gap-1">
        <img src="\public\LogoVastu.png" alt="Logo" className="h-10 w-10" />
        <span className="text-2xl font-bold text-red-700">Vastu Pujayam</span>
      </div>

      {/* Center - Search Bar */}
      <div className="flex-grow mx-6 max-w-md relative">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Right - Buttons */}
      <div className="flex items-center space-x-4">
        <button className="text-xl text-red-700 font-medium hover:underline">
          Login
        </button>
        <button className="text-red-700 hover:text-red-900">
          <FaHeart size={18} />
        </button>
        <button className="text-red-700 hover:text-red-900">
          <FaShoppingBag size={20} />
        </button>
      </div>
    </div>
  );
}

export default Header;
