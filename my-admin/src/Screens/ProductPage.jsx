import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Nest Shaped Chair",
    sales: 134,
    price: 240,
    oldPrice: 350,
    rating: 4.2,
    discount: "-10%",
  },
  {
    id: 2,
    image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BmLXMxMDgtcG0tNDExMy1tb2NrdXAuanBn.jpg",
    title: "Nest Shaped Chair",
    sales: 134,
    price: 240,
    oldPrice: 350,
    rating: 4.2,
    discount: "-10%",
  },
  // Add more product objects...
];

const ProductPage = ({ isSidebarOpen }) => {
  return (
    <div
      className={`transition-all duration-300 min-h-screen ${
        isSidebarOpen ? "ml-6" : "ml-16"
      } p-4 w-full`}
    >
      {/* Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
        <Link
          to="/add-product"
          className="btn border px-4 py-2 rounded bg-white shadow-sm flex items-center gap-2"
        >
          <i className="bx bxs-plus-square"></i> New Product
        </Link>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 items-center justify-end">
          <div className="relative">
            <input
              type="text"
              className="pl-10 pr-4 py-2 border rounded-md bg-white shadow-sm"
              placeholder="Search Product..."
            />
            <i className="bx bx-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          </div>

          <div className="relative">
            <button className="btn border px-4 py-2 bg-white rounded-md flex items-center gap-2">
              Sort By <i className="bx bx-chevron-down"></i>
            </button>
          </div>

          <div className="relative">
            <button className="btn border px-4 py-2 bg-white rounded-md flex items-center gap-2">
              Collection Type <i className="bx bxs-category"></i>
            </button>
          </div>

          <div className="relative">
            <button className="btn border px-4 py-2 bg-white rounded-md flex items-center gap-2">
              Price Range <i className="bx bx-slider"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow p-2 relative">
            <img src={product.image} alt={product.title} className="rounded-t-lg" />
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              {product.discount}
            </div>
            <div className="p-2">
              <h6 className="text-sm font-medium cursor-pointer">{product.title}</h6>
              <div className="flex justify-between text-sm mt-1">
                <p>
                  <strong>{product.sales}</strong> Sales
                </p>
                <p className="font-bold">
                  <span className="line-through text-gray-400 mr-1">${product.oldPrice}</span>
                  <span className="text-green-600">${product.price}</span>
                </p>
              </div>
              <div className="flex items-center mt-2 text-yellow-400 text-xs">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={`bx bxs-star ${
                      i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"
                    }`}
                  ></i>
                ))}
                <span className="ml-auto text-gray-500 text-xs">
                  {product.rating}(182)
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
