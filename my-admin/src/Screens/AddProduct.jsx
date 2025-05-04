import React from "react";

const AddProduct = ({ isSidebarOpen }) => {
  return (
    <div
      className={`transition-all duration-300 min-h-screen ${
        isSidebarOpen ? "ml-6 border-white" : "ml-16"
      } flex justify-center items-start p-6`}
    >
      <div className="bg-transparent shadow-[0_15px_40px_rgba(0,0,0,0.3)] rounded p-6 w-full max-w-6xl">
        <h5 className="text-xl font-semibold mb-4">Add New Product</h5>
        <hr className="mb-6 border-white" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left section */}
          <div className="lg:col-span-2">
            <div className="border-2 border-white p-4 rounded">
              <div className="mb-4">
                <label
                  htmlFor="inputProductTitle"
                  className="block text-sm font-medium mb-1"
                >
                  Product Title
                </label>
                <input
                  type="text"
                  id="inputProductTitle"
                  placeholder="Enter product title"
                  className="w-full border border-gray-400 p-2 rounded"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="inputProductDescription"
                  className="block text-sm font-medium mb-1"
                >
                  Description
                </label>
                <textarea
                  id="inputProductDescription"
                  rows="3"
                  className="w-full border border-gray-400 p-2 rounded"
                ></textarea>
              </div>
              {/* <div className="mb-4">
                <label htmlFor="image-uploadify" className="block text-sm font-medium mb-1">
                  Product Images
                </label>
                <input
                  id="image-uploadify"
                  type="file"
                  accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf"
                  multiple
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div> */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2 text-white">
                  Product Images
                </label>

                <div
                  className="w-full border-2 border-dashed border-white rounded-lg p-6 text-center cursor-pointer bg-transparent hover:bg-white/10 transition"
                  onClick={() =>
                    document.getElementById("image-uploadify").click()
                  }
                >
                  <p className="text-white">
                    📁 Drag & Drop your file(s) here or click to upload
                  </p>
                  <input
                    id="image-uploadify"
                    type="file"
                    multiple
                    accept=".xlsx,.xls,image/*,.doc,audio/*,.docx,video/*,.ppt,.pptx,.txt,.pdf"
                    className="hidden"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right section */}
          <div>
            <div className="border-2 border-white p-4 rounded">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="inputPrice"
                    className="block text-sm font-medium mb-1"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    id="inputPrice"
                    placeholder="00.00"
                    className="w-full border border-gray-400 p-2 rounded"
                  />
                </div>
                <div>
                  <label
                    htmlFor="inputCompareatprice"
                    className="block text-sm font-medium mb-1"
                  >
                    Compare at Price
                  </label>
                  <input
                    type="text"
                    id="inputCompareatprice"
                    placeholder="00.00"
                    className="w-full border border-gray-400 p-2 rounded"
                  />
                </div>
                <div>
                  <label
                    htmlFor="inputCostPerPrice"
                    className="block text-sm font-medium mb-1"
                  >
                    Cost Per Price
                  </label>
                  <input
                    type="text"
                    id="inputCostPerPrice"
                    placeholder="00.00"
                    className="w-full border border-gray-400 p-2 rounded"
                  />
                </div>
                <div>
                  <label
                    htmlFor="inputStarPoints"
                    className="block text-sm font-medium mb-1"
                  >
                    Star Points
                  </label>
                  <input
                    type="text"
                    id="inputStarPoints"
                    placeholder="00.00"
                    className="w-full border border-gray-400 p-2 rounded"
                  />
                </div>
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <label
                    htmlFor="inputProductType"
                    className="block text-sm font-medium mb-1"
                  >
                    Product Type
                  </label>
                  <select
                    id="inputProductType"
                    className="w-full border border-gray-400 p-2 rounded"
                  >
                    <option></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="inputVendor"
                    className="block text-sm font-medium mb-1"
                  >
                    Vendor
                  </label>
                  <select
                    id="inputVendor"
                    className="w-full border border-gray-400 p-2 rounded"
                  >
                    <option></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="inputCollection"
                    className="block text-sm font-medium mb-1"
                  >
                    Collection
                  </label>
                  <select
                    id="inputCollection"
                    className="w-full border border-gray-400 p-2 rounded"
                  >
                    <option></option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="inputProductTags"
                    className="block text-sm font-medium mb-1"
                  >
                    Product Tags
                  </label>
                  <input
                    type="text"
                    id="inputProductTags"
                    placeholder="Enter Product Tags"
                    className="w-full border border-gray-400 p-2 rounded"
                  />
                </div>
                <div>
                  <button
                    type="button"
                    className="w-full bg-gray-200 text-gray-800 p-2 rounded"
                  >
                    Save Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
