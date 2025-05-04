import React from 'react';

const Header = () => {
  return (
    <header className="bg-transparent shadow p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="https://via.placeholder.com/40" alt="Logo" className="h-10" />
        <span className="ml-2 text-xl font-bold">MyApp</span>
      </div>
      <div className="relative">
        <button className="flex items-center space-x-2 focus:outline-none">
          <img src="https://via.placeholder.com/32" alt="Profile" className="h-8 w-8 rounded-full" />
          <span>Profile</span>
        </button>
        {/* Simplified dropdown (can be expanded with state for toggle) */}
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden">
          <a href="#profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
          <a href="#logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
        </div>
      </div>
    </header>
  );
};

export default Header;