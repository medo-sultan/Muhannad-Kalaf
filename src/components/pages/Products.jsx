import { useState } from "react";
import { products, categories } from "../Data/products";
import ProductCard from "./ProductCard";
import { FiGrid, FiList, FiSliders } from "react-icons/fi";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("featured");

  // Filter products by category
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.id - a.id;
      default:
        return b.isFeatured ? 1 : -1;
    }
  });

  return (
    <section className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="relative py-24 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#C9A227] ">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-6xl font-bold tracking-wide 
    bg-black 
    bg-clip-text text-transparent"
          >
            افضل المنتجات
          </h1>

          <div className="mt-6 flex justify-center">
            <span className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#d47b37] to-transparent"></span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters & Controls */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.name
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                  <span className="ml-1 text-xs opacity-70">
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>

            {/* Sort & View Controls */}
            {/* <div className="flex items-center gap-4">
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>

          
              <div className="hidden md:flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "grid"
                      ? "bg-white text-blue-500 shadow"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <FiGrid size={18} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === "list"
                      ? "bg-white text-blue-500 shadow"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <FiList size={18} />
                </button>
              </div>
            </div> */}
          </div>

          {/* Results Count */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-gray-500 text-sm">
              عرض{" "}
              <span className="font-semibold text-gray-900">
                {sortedProducts.length}
              </span>{" "}
              منتجات
              {activeCategory !== "All" && (
                <span>
                  {" "}
                  in{" "}
                  <span className="font-semibold text-blue-500">
                    {activeCategory}
                  </span>
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "grid grid-cols-1 gap-6"
            }
          >
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <FiSliders size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              لم يتم العثور على منتجات
            </h3>
            <p className="text-gray-500">
              حاول تعديل عوامل التصفية للعثور على ما تبحث عنه.{" "}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
