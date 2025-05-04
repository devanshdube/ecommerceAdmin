import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import Dashboard from '../Screens/Dashboard';
import Analytics from '../Screens/Analytics';
import Users from '../Screens/Users';
import Settings from '../Screens/Settings';
import backgroundImage from '../assets/2.png';
import AddProduct from "../Screens/AddProduct";
import ProductPage from "../Screens/ProductPage";
import InventoryPage from "../Screens/InventoryPage";

const MainRouter = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Router>
      <div
        className="flex min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="flex-1 flex flex-col">
          <Header />
          <div className="flex-1 p-6 bg-transparent">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/add-product" element={<AddProduct isSidebarOpen={isSidebarOpen} />} />
              <Route path="/products" element={<ProductPage isSidebarOpen={isSidebarOpen} />} />
              <Route path="/inventory" element={<InventoryPage isSidebarOpen={isSidebarOpen} />} />

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default MainRouter;
