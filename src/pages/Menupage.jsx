import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

const API_URL = "https://localhost:7246/api/items"; // make sure this matches your backend port

const Menupage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("none");
  const [loading, setLoading] = useState(true);

  // ✅ Single data fetch
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await axios.get(API_URL);
        console.log("Fetched items:", res.data); // check if data arrives
        setMenuItems(res.data || []);
      } catch (err) {
        console.error("Error fetching menu:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  // 🔹 Apply filters and sorting
  const filteredItems = menuItems
    .filter((item) => (filter === "All" ? true : item.category === filter))
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "low-high") return a.price - b.price;
      if (sortOrder === "high-low") return b.price - a.price;
      return 0;
    });

  // 🛒 Add to Cart
  const addToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((c) => c.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${item.name} added to cart ✅`);
  };

  return (
    <div className="menu-container">
      <h2 className="menu-title">Our Menu</h2>

      {/* Search + Filter Controls */}
      <div className="menu-filters">
        <input
          type="text"
          placeholder="Search for meals..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="category-buttons">
          {["All", "Meals", "Drinks", "Snacks"].map((cat) => (
            <button
              key={cat}
              className={`category-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <select
          className="sort-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="none">Sort by</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

      {/* Menu Grid */}
      {loading ? (
        <p>Loading menu...</p>
      ) : filteredItems.length > 0 ? (
        <div className="menu-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-card">
              <img
                src={item.imageUrl || "/placeholder.jpg"}
                alt={item.name}
                className="menu-img"
                onError={(e) => (e.target.src = "/placeholder.jpg")}
              />
              <div className="item-details">
                <h4>{item.name}</h4>
                <p className="category">{item.category}</p>
                <p className="menu-price">R{item.price.toFixed(2)}</p>
                <p
                  className={item.available ? "in-stock" : "out-stock"}
                >
                  {item.available ? "Available" : "Out of Stock"}
                </p>

                <button
                  className="add-cart-btn"
                  onClick={() => addToCart(item)}
                  disabled={!item.available}
                >
                  {item.available ? "Add to Cart" : "Out of Stock"}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-items">No items found.</p>
      )}
    </div>
  );
};

export default Menupage;
