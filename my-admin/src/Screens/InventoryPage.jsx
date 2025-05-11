// src/pages/InventoryPage.jsx
import React from "react";

const inventoryItems = [
{
id: 1,
name: "Nest Shaped Chair",
sku: "CHAIR-001",
stock: 120,
price: 240,
status: "In Stock",
},
{
id: 2,
name: "Modern Lamp",
sku: "LAMP-002",
stock: 12,
price: 75,
status: "Low Stock",
},
{
id: 3,
name: "Wooden Desk",
sku: "DESK-003",
stock: 0,
price: 360,
status: "Out of Stock",
},
// Add more inventory items here...
];

const InventoryPage = ({ isSidebarOpen }) => {
return (
<div
className={`transition-all duration-300 min-h-screen ${
isSidebarOpen ? "ml-6 border-white" : "ml-10"
} p-6 w-full`}
>
<div className="mb-4 flex justify-between items-center">
<h2 className="text-xl font-semibold">Inventory</h2>
<button className="btn border px-4 py-2 rounded bg-white shadow-sm flex items-center gap-2">
<i className="bx bx-plus"></i> Add Item
</button>
</div>

<div className="bg-white shadow rounded-lg overflow-x-auto">
<table className="min-w-full table-auto text-sm">
<thead className="bg-gray-100 text-gray-600 text-left">
  <tr>
    <th className="px-4 py-3">Product</th>
    <th className="px-4 py-3">SKU</th>
    <th className="px-4 py-3">Stock</th>
    <th className="px-4 py-3">Price</th>
    <th className="px-4 py-3">Status</th>
    <th className="px-4 py-3">Actions</th>
  </tr>
</thead>
<tbody className="text-gray-700">
  {inventoryItems.map((item) => (
    <tr key={item.id} className="border-b hover:bg-gray-50">
      <td className="px-4 py-3">{item.name}</td>
      <td className="px-4 py-3">{item.sku}</td>
      <td className="px-4 py-3">{item.stock}</td>
      <td className="px-4 py-3">${item.price}</td>
      <td className="px-4 py-3">
        <span
          className={`px-2 py-1 text-xs rounded-full ${
            item.status === "In Stock"
              ? "bg-green-100 text-green-600"
              : item.status === "Low Stock"
              ? "bg-yellow-100 text-yellow-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {item.status}
        </span>
      </td>
      <td className="px-4 py-3">
        <button className="text-blue-600 hover:underline mr-2">Edit</button>
        <button className="text-red-600 hover:underline">Delete</button>
      </td>
    </tr>
  ))}
</tbody>
</table>
</div>
</div>
);
};

export default InventoryPage;
