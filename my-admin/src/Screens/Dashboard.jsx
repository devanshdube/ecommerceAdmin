import React from 'react';

const Dashboard = () => {
  return (
    // <div className="p-6">
    //   <h2 className="text-2xl font-bold">Dashboard Page</h2>
    //   <p className="mt-4">Welcome to the Dashboard!</p>
    // </div>
    <div className="bg-transparent">
    <h1 className="text-2xl font-bold text-white">Dashboard</h1>
    <div className="bg-white bg-opacity-80 p-4 rounded-lg mt-4">
      {/* Example content with semi-transparent background for readability */}
      <p>Your dashboard content goes here.</p>
    </div>
  </div>
  );
};

export default Dashboard;