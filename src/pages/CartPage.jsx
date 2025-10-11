import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const CartPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const updateQuantity = (id, delta) => {
    const updated = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please log in first.");
      navigate("/login");
      return;
    }

    const order = {
      userEmail: user.email,
      items: cart.map((i) => ({ itemId: i.id, quantity: i.quantity })),
      total: totalPrice,
    };

    try {
      const res = await fetch("https://localhost:7246/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });

      if (res.ok) {
        alert("Order placed successfully!");
        localStorage.removeItem("cart");
        setCart([]);
        navigate("/orders");
      } else {
        alert("Failed to place order.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error.");
    }
  };

  return (
    <div className="cart-wrapper">
      <h2 className="cart-title">🛍️ Your Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty 🛒</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-card">
                <div className="cart-left">
                  <img
                    src={item.imageUrl || "/placeholder.jpg"}
                    alt={item.name}
                    className="cart-img"
                    onError={(e) => (e.target.src = "/placeholder.jpg")}
                  />
                </div>

                <div className="cart-middle">
                  <h3>{item.name}</h3>
                  <p className="cart-category">{item.category}</p>
                  <p className="cart-price">R{item.price.toFixed(2)}</p>

                  <div className="cart-quantity">
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </div>
                </div>

                <div className="cart-right">
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: <span>R{totalPrice.toFixed(2)}</span></h3>
            <button className="checkout-btn" onClick={placeOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
