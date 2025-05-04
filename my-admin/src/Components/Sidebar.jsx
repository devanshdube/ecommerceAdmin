import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  // const [isOpen, setIsOpen] = useState(true);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  const menuItems = [
    { name: "Dashboard", iconClass: "bx bx-home-alt", path: "/" },
    { name: "Analytics", iconClass: "bx bx-bar-chart-alt-2", path: "/analytics" },
    { name: "Users", iconClass: "bx bx-user", path: "/users" },
    { name: "Settings", iconClass: "bx bx-cog", path: "/settings" },
    { name: "Products", iconClass: "bx bx-package", path: "/products" },  
    { name: "Add Product", iconClass: "bx bx-plus-circle", path: "/add-product" },
    { name: "Inventory", iconClass: "bx bx-box", path: "/inventory" }

  ];
  
  

  return (
    // <div className={`bg-gray-800 text-white h-screen ${isOpen ? 'w-64' : 'w-16'} transition-all duration-300`}>
    <div
      className={`text-white h-screen ${
        isSidebarOpen ? "w-64" : "w-16"
      } transition-all duration-300 bg-transparent bg-opacity-100`}
    >
      <div className="p-4">
        <button onClick={toggleSidebar} className="focus:outline-none">
          {isSidebarOpen  ? "⬅️ Daily Deals MART " : "➡️"} 
        </button>
      </div>
      <nav className="mt-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center p-4 hover:bg-[rgba(255,255,255,0.2)] ${
                isActive ? "bg-[rgba(255,255,255,0.15)]" : ""
              }`
            }
            exact
          >
            {/* <span className="text-xl">{item.icon}</span> */}
            <i className={`${item.iconClass} text-xl`}></i>
            {isSidebarOpen  && <span className="ml-4">{item.name}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
